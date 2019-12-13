export enum PathNodeState {
  opened = 1,
  closed = 2,
  tested = 3
}

export class PathNode {
  x: number;
  y: number;

  traversable: boolean;
  state: PathNodeState;

  constructor(x: number, y:number, traversable:boolean = true) {
    this.x = x;
    this.y = y;
    this.traversable = traversable;
  }
}