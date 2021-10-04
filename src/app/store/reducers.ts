import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import * as cars from './cars';
import * as owners from './owners';

export interface AppState {
  [cars.featureKey]: cars.State,
  [owners.featureKey]: owners.State,
}

export const reducers: ActionReducerMap<AppState> = {
  [cars.featureKey]: cars.reducer,
  [owners.featureKey]: owners.reducer,
}
