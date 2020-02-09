import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '.';

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

// export const selectRootState = state => state;
// export const selectRouter = createSelector(selectRootState, state => state.router as any);
// export const selectRouterState = createSelector(selectRouter, router => router.state as RouterState);

export const getRouterInfo = createSelector(
  selectRouterState,
  state => state.state
);

export const selectRouterData = createSelector(
  getRouterInfo,
  (state) => state.data
);