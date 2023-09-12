/******** CLEAR STATE ***********/
import {createAction} from '@ngrx/store';


const CLEAR_STATE = '[shared] clear state';
export const ClearState = createAction(CLEAR_STATE);

/******** START LOADING ***********/
const START_LOADING = '[shared] start loading';
export const StartLoading = createAction(START_LOADING);

/******** STOP LOADING ***********/
const STOP_LOADING = '[shared] stop loading';
export const StopLoading = createAction(STOP_LOADING);

/******** CLEAR LOADING ***********/
const CLEAR_LOADING = '[shared] clear loading';
export const ClearLoading = createAction(CLEAR_LOADING);