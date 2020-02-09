import { Params, Data, RouterStateSnapshot } from '@angular/router';
import { RouterReducerState, RouterStateSerializer, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../../core.state';

export interface RouterState {
    url: string;
    queryParams: Params;
    params: Params;
    // data: Data;
}

export class CustomSerializer implements RouterStateSerializer<RouterState> {
    serialize(routerState: RouterStateSnapshot): RouterState {
        let route = routerState.root;

        while(route.firstChild) {
            route = route.firstChild;
        }

        const {
            url,
            root: { queryParams },
        } = routerState;
        const { params } = route;

        return { url, params, queryParams };
    }
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer
};

