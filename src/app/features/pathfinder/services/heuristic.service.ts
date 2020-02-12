import { Injectable } from "@angular/core";
import { PathfinderModule } from '../pathfinder.module';

@Injectable({
    providedIn: PathfinderModule
})
export class HeuristicService {
    constructor() {}

    getManhattanHeuristic(dx: number, dy: number): number {
        return dx + dy;
    }

    getEuclideanHeuristic(dx: number, dy: number): number {
        return Math.sqrt(dx * dx + dy * dy);
    }

    getOctileHeuristic(dx: number, dy: number): number {
        var F = Math.SQRT2 - 1;
        return (dx < dy)? F * dx + dy : F * dy + dx;
    }

    getChebyshevHeuristic(dx: number, dy: number): number {
        return Math.max(dx, dy);
    }
}
