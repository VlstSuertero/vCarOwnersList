import { createAction, props } from '@ngrx/store';
import { OwnerModel } from '../../models';

export const loadOwners = createAction('[Owners] Load Owners');
export const loadOwnersSuccess = createAction('[Owners] Load Owners Success', props<{ owners: OwnerModel[] }>());
export const addOwner = createAction('[Owners] Add Owners Success', props<{ owner: OwnerModel }>());
export const changeOwner = createAction('[Owners] Change Owner', props<{ owner: OwnerModel }>());
export const removeOwner = createAction('[Owners] Remove Owners Success', props<{ id: string }>());
export const loadOwnersFailure = createAction('[Owners] Load Owners Failure', props<{ error: any }>());
