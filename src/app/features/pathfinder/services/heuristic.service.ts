import { Injectable } from "@angular/core";
import { PathfinderModule } from '../pathfinder.module';
import { PathNode } from '../models/node';

@Injectable({
    providedIn: PathfinderModule
})
export class HeuristicService {

    F = Math.SQRT2 - 1;

    constructor() {}

    // getManhattanHeuristic(dx: number, dy: number): number {
    //     return dx + dy;
    // }

    // getEuclideanHeuristic(dx: number, dy: number): number {
    //     return Math.sqrt(dx * dx + dy * dy);
    // }

    // getOctileHeuristic(dx: number, dy: number): number {
    //     var F = Math.SQRT2 - 1;
    //     return (dx < dy)? F * dx + dy : F * dy + dx;
    // }

    // getChebyshevHeuristic(dx: number, dy: number): number {
    //     return Math.max(dx, dy);
    // }

    getHCost(source: PathNode, target: PathNode, heuristic: string): number {
        switch(heuristic.toLocaleLowerCase()) {
            case "manhattan":
                return this.getManhattanHeuristic(source, target);
            case "euclidean":
                return this.getEuclideanHeuristic(source, target);
            case "octile":
                return this.getOctileHeuristic(source, target);
            case "chebyshev":
                return this.getChebyshevHeuristic(source, target);
        }
    }

    getManhattanHeuristic(source: PathNode, target: PathNode): number {
        let [dx, dy] = this.getDifference(source, target);
        return dx + dy;
    }

    getEuclideanHeuristic(source: PathNode, target: PathNode): number {
        let [dx, dy] = this.getDifference(source, target);
        return Math.sqrt(dx * dx + dy * dy);
    }

    getOctileHeuristic(source: PathNode, target: PathNode): number {
        let [dx, dy] = this.getDifference(source, target);
        return (dx < dy) ? this.F * dx + dy : this.F * dy + dx;
    }

    getChebyshevHeuristic(source: PathNode, target: PathNode): number {
        let [dx, dy] = this.getDifference(source, target);
        return Math.max(dx, dy);
    }

    getDifference(source: PathNode, target: PathNode): [number, number] {
        return [Math.abs(source.x - target.x), Math.abs(source.y - target.y)]
    }

}
