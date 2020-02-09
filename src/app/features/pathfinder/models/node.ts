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

  traversable: boolean; // if false, means that node is a wall
  state: PathNodeState;

  constructor(x: number, y:number, traversable:boolean = true, state:PathNodeState = 1) {
    this.x = x;
    this.y = y;
    this.traversable = traversable;
    this.state = state;
  }
}