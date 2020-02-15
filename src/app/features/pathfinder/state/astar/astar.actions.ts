import { createAction, props } from '@ngrx/store';
import { PathNode } from '../../models/node';

// export const actionPathfinderAStarStart = createAction(
//     '[Pathfinder] [A*] Start'
// );

export const actionPathfinderAStarAddToClosedSet = createAction(
    '[Pathfinder] [A*] Add to closed set',
    props<{ node: PathNode }>()
);

export const actionPathfinderAStarAddToOpenSet = createAction(
    '[Pathfinder] [A*] Add to open set',
    props<{ node: PathNode }>()
);

export const actionPathfinderAStarRemoveFromOpenSet = createAction(
    '[Pathfinder] [A*] Remove from open set',
    props<{ node: PathNode }>()
);

export const actionPathfinderAStarAddMultipleToOpenSet = createAction(
    '[Pathfinder] [A*] Add multiple to open set',
    props<{ nodes: PathNode[] }>()
);

export const actionPathfinderAStarNoop = createAction(
    '[Pathfinder] [A*] Noop'
);

export const actionPathfinderUpdateAStar = createAction(
    '[Pathfinder] [A*] Update AStar',
    props<{ openSetNodes: PathNode[], toClose: PathNode }>()
);