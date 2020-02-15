export enum PathNodeState {
  unknown = 0,
  opened = 1,
  closed = 2,
  tested = 3,
  start = 4,
  finish = 5
}

export class PathNode {
  x: number;
  y: number;

  // A* properties
  g?: number;
  h?: number;
  f?: number;
  parent?: PathNode;

  traversable: boolean; // if false, means that node is a wall
  state: PathNodeState;

  constructor(x: number, y: number, g: number = 0, h: number = 0, f: number = 0, parent: PathNode = null, traversable: boolean = true, state: PathNodeState = 0) {
    this.x = x;
    this.y = y;
    this.traversable = traversable;
    this.state = state;
    this.g = g;
    this.h = h;
    this.f = f;
    this.parent = parent;
  }
}