/* NgRx */
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SharedState} from './shared.reducer';

// Selector functions
const SharedState = createFeatureSelector<SharedState>('shared');

export const isLoading = createSelector(
  SharedState,
  state => state.loading
);