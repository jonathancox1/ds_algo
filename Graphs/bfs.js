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

////////////

const bfs = (start) => {
  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {
    const aiprort = queue.shift(); // dequeue

    const destinations = adjacencyList.get(aiprort);

    for (const destination of destinations) {
      console.log({ destination, queue: queue });

      if (destination === "BKK") {
        console.log("Found BKK");
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
};

bfs("PHX");
