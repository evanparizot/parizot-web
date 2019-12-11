import { Algorithm } from './../models/algorithm';

export const Algorithms: Algorithm[] = [
  {
    name: "A*",
    description: "A graph traversal and path search algorithm.",
    url: "https://en.wikipedia.org/wiki/A*_search_algorithm",
    heuristics: true,
    options: {
      allowDiagonal: {
        disable: false
      },
      biDirectional: {
        disable: false
      },
      dontCrossCorners: {
        disable: false
      },
      weight: 1
    }
  },
  {
    name: "Dijkstra",
    description: "Algorithm for finding the shortest path between nodes in a graph.",
    url: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
    heuristics: false,
    options: {
      allowDiagonal: {
        disable: false
      },
      biDirectional: {
        disable: false
      },
      dontCrossCorners: {
        disable: false
      }
    }
  },
  {
    name: "Breadth First Search",
    description: "For traversing or searching tree or graph data structures.",
    url: "https://en.wikipedia.org/wiki/Breadth-first_search",
    heuristics: false,
    options: {
      allowDiagonal: {
        disable: false
      },
      biDirectional: {
        disable: false
      },
      dontCrossCorners: {
        disable: false
      }
    }
  }
]