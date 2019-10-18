export class Node {
  x: number;
  y: number;
  traversable: boolean;

  constructor(x: number, y:number, traversable:boolean = true) {
    this.x = x;
    this.y = y;
    this.traversable = traversable;
  }
}