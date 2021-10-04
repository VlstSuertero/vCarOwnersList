import { createAction, props } from '@ngrx/store';

export const loadCars = createAction(
  '[Cars] Load Cars'
);

export const loadCarsSuccess = createAction(
  '[Cars] Load Cars Success',
  props<{ data: any }>()
);

export const loadCarsFailure = createAction(
  '[Cars] Load Carss Failure',
  props<{ error: any }>()
);
