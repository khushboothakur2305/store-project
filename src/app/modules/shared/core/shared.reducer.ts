import * as SharedActions from './shared.actions';
import { createReducer, on } from '@ngrx/store';

// State for this feature (Account)
export interface SharedState {
  counter: number
}

const initialState: SharedState = {
  counter: 0
};

export const reducer = createReducer(
  initialState,
  on(SharedActions.AddCounter, (state) => ({ ...state, counter: state.counter + 1 })),
  on(SharedActions.RemoveCounter, (state) => ({ ...state, counter: state.counter - 1 })),
  // CLEAR LOADING

  on(SharedActions.ClearLoading, (state) => ({
    ...state,

  })),
);