import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ICarOwnerServiceService } from '../../services';
import { loadOwners, loadOwnersSuccess } from './actions';
import { OwnerModel } from '../../models';

@Injectable()
export class Effects {

  public loadOwners$ = createEffect(() => this.actions$.pipe(
    ofType(loadOwners),
    mergeMap(() => this.data.getAllOwners().pipe(
      map((owners: OwnerModel[]) => ({owners})),
      map(loadOwnersSuccess),
      catchError(() => EMPTY)
    ))
  ))

  constructor(
    private actions$: Actions,
    private data: ICarOwnerServiceService
  ) {}

}
