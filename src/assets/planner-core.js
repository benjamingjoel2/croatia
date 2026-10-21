// Shared by the build (to pre-render preset routes) and the browser planner.
// Pure functions only, no DOM.

export function buildGraph(legs) {
  const g = {};
  const add = (from, to, leg) => (g[from] ||= []).push({ to, leg });
  for (const leg of legs) { add(leg.a, leg.b, leg); add(leg.b, leg.a, leg); }
  return g;
}

// Penalise road legs slightly and transfers so the planner prefers
// direct boats over long drives that happen to be a few minutes shorter.
const cost = (leg) => leg.mins + (leg.type === 'road' ? 10 : 15);

// Dijkstra from one port to the nearest of a set of target ports.
export function shortestPath(graph, from, targets) {
  const goal = new Set(targets);
  if (goal.has(from)) return { to: from, steps: [] };
  const dist = { [from]: 0 }, prev = {}, done = new Set();
  const queue = [from];
  while (queue.length) {
    queue.sort((a, b) => dist[a] - dist[b]);
    const node = queue.shift();
    if (done.has(node)) continue;
    done.add(node);
    if (goal.has(node)) {
      const steps = [];
      for (let n = node; prev[n]; n = prev[n].from) steps.unshift({ from: prev[n].from, to: n, leg: prev[n].leg });
      return { to: node, steps };
    }
    for (const { to, leg } of graph[node] || []) {
      const d = dist[node] + cost(leg);
      if (dist[to] === undefined || d < dist[to]) { dist[to] = d; prev[to] = { from: node, leg }; queue.push(to); }
    }
  }
  return null;
}

// Pick the best leg when two legs join the same ports (e.g. ferry and catamaran).
function bestLeg(graph, from, to, preferCar) {
  const options = (graph[from] || []).filter((e) => e.to === to).map((e) => e.leg);
  if (preferCar) {
    const car = options.find((l) => l.type === 'ferry' || l.type === 'road');
    if (car) return car;
  }
  return options.sort((a, b) => a.mins - b.mins)[0];
}

/**
 * plan({ ports, legs, islands }, { start, end, stops: [islandId], car })
 * → { days: [...], legs: [...], totalNights, totalMins, warnings }
 */
export function plan(data, { start, end, stops, car = false }) {
  const graph = buildGraph(car ? data.legs.filter((l) => l.type === 'ferry' || l.type === 'road') : data.legs);
  const byId = Object.fromEntries(data.islands.map((i) => [i.id, i]));
  const segments = [];
  const warnings = [];
  let here = start;
  let totalNights = 0, totalMins = 0;

  const travel = (targets, label) => {
    // Try each port; later ports in the island's list carry a penalty so the
    // preferred base wins unless it is much harder to reach.
    let path = null, best = Infinity;
    targets.forEach((t, i) => {
      const p = shortestPath(graph, here, [t]);
      if (!p) return;
      const c = p.steps.reduce((sum, s) => sum + cost(bestLeg(graph, s.from, s.to, car)), 0) + i * 45;
      if (c < best) { best = c; path = p; }
    });
    if (!path) { warnings.push(`No ${car ? 'car-ferry ' : ''}route found to ${label}.`); return null; }
    const steps = path.steps.map((s) => {
      const leg = bestLeg(graph, s.from, s.to, car);
      totalMins += leg.mins;
      if (leg.seasonal) warnings.push(`${data.ports[s.from].name} → ${data.ports[s.to].name} runs mainly in summer or less often off-season.`);
      return { from: s.from, to: s.to, fromName: data.ports[s.from].name, toName: data.ports[s.to].name, type: leg.type, mins: leg.mins, seasonal: !!leg.seasonal, op: leg.op || '', note: leg.note || '' };
    });
    here = path.to;
    return steps;
  };

  for (const id of stops) {
    const island = byId[id];
    if (!island) continue;
    const steps = travel(island.ports, island.name);
    if (!steps) continue;
    const nights = island.nights[0];
    totalNights += nights;
    segments.push({ island: island.id, name: island.name, base: data.ports[here].name, nights, range: island.nights, why: island.why, steps });
  }
  const finalSteps = end ? travel([end], data.ports[end].name) : [];
  return { start: data.ports[start].name, end: end ? data.ports[end].name : null, segments, finalSteps: finalSteps || [], totalNights, totalMins, warnings: [...new Set(warnings)] };
}

export const fmtMins = (m) => {
  const h = Math.floor(m / 60), r = m % 60;
  return h ? `${h} h${r ? ` ${String(r).padStart(2, '0')}` : ''}` : `${r} min`;
};

export const legLabel = { ferry: 'Car ferry', cat: 'Catamaran', ship: 'Passenger boat', road: 'By road' };
