import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { featureKey } from './reducer';


export const ownersSelectors = createFeatureSelector<Store>(featureKey);

export const getOwners = createSelector(
  ownersSelectors,
  (elem: any): any => {
    return elem
  }
);
// export const getOwnerById = (id: string) => createSelector(
//   ownersSelectors,
//   (elem: any): any => elem.filter((item: any) => item.id === id)[0]
// );

