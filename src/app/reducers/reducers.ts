import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';

import {RouterStateUrl} from '../../app/shared/utils';

import * as fromRouter from '@ngrx/router-store';

import {storeFreeze} from 'ngrx-store-freeze';

import * as fromAuth from '../../app/auth/reducers/auth.reducer';
//import { FormatInputPathObject } from 'path';
//import { stat } from 'fs';

export interface State {
  auth: fromAuth.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
} 

export const reducers: ActionReducerMap<State | any> = {
  auth: fromAuth.AuthReducer,
  router: fromRouter.routerReducer
};

export function logger (reducer: ActionReducer<State>): ActionReducer<State>{
  return function (state: State, action:any): State{
    console.log('state',state);
    console.log('action',action);
    return reducer(state,action);
  }
}
export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger,storeFreeze] : [];

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');

export const getAuth = createSelector(getAuthState,fromAuth.getAuthState);
