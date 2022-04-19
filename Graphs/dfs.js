const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// create graph
const adjacencyList = new Map();

// add all nodes
const addNode = (airport) => {
  adjacencyList.set(airport, []);
};

// add edges undirectional
const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
};

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

///////////////////

const dfs = (start, visitied = new Set()) => {
  console.log(start);

  visitied.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log("BFS found BKK");
    }

    if (!visitied.has(destination)) {
      dfs(destination, visitied);
    }
  }
};

dfs("PHX");
