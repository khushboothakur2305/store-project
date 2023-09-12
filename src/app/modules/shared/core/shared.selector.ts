/* NgRx */
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SharedState} from './shared.reducer';

// Selector functions
const SharedState = createFeatureSelector<SharedState>('shared');


export const counter = createSelector(SharedState,state=>state.counter)