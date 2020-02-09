import { Params, Data } from '@angular/router';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
    data: Data;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};

export interface State {
    router: RouterReducerState<RouterStateUrl>;
}