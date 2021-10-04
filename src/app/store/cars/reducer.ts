import { createReducer, on } from '@ngrx/store';
import * as actions from './actions'
import { CarModel } from '../../models';



export const featureKey = 'cars';

export interface State {
  items: CarModel[]
}

export const initialState: State = {
  items: []
};


export const reducer = createReducer(
  initialState,
);

