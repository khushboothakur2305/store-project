import * as SharedActions from './shared.actions';
import {createReducer, on} from '@ngrx/store';

// State for this feature (Account)
export interface SharedState {
  loading: number[];
  language: number;
  country: string;
  uuid: string;
  countriesList: any[];
}

const initialState: SharedState = {
  loading: [],
  language: 2,
  country: '6239e4ade62563250aee7837',
  uuid: '',
  countriesList: [],
};

export function addProductReducer(state: any[] = [], action:any) {
    switch (action.type) {
      case 'Increase':
          return [...state, action.payload];
      case 'Decrease':
          return [...state, action.payload];
      default:
          return state;
      }
  }

export const reducer = createReducer(
  initialState,

  // CLEAR STATE
  on(SharedActions.ClearState, (state) => ({
    ...initialState,
    language: state.language,
    country: state.country,
    countriesList: state.countriesList,
  })),
  // START LOADING
  on(SharedActions.StartLoading, (state) => ({
    ...state,
    loading: [...state.loading, 1],
  })),

  // STOP LOADING
  on(SharedActions.StopLoading, (state) => ({
    ...state,
    loading: [...state.loading].slice(1),
  })),

  // CLEAR LOADING
  on(SharedActions.ClearLoading, (state) => ({
    ...state,
    loading: [],
  })),
);