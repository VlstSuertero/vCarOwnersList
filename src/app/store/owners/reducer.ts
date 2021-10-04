import { createReducer, on } from '@ngrx/store';
import { OwnerModel } from '../../models';
import * as actions from './actions'

export const featureKey = 'owners';

export interface State {
  items: OwnerModel[]
}

export const initialState: State = {
  items: []
};

export const reducer = createReducer(
  initialState,
  on(actions.loadOwners, state => ({
    ...state
  })),
  on(actions.loadOwnersSuccess, (state, {owners}) => ({
    ...state,
    items: owners
  })),
  on(actions.addOwner, (state, {owner}) => ({
    ...state,
    items: [...state.items, owner]
  })),
  on(actions.changeOwner, (state, {owner}) => ({
    ...state,
    items: state.items.map((elem: OwnerModel) => elem.id === owner.id ? owner : elem)
  })),
  on(actions.removeOwner, (state, {id}) => ({
    ...state,
    items: state.items.filter((owner: OwnerModel) => owner.id !== id)

  })),
);

