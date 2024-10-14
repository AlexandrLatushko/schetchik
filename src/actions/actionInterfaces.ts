// src/actions/actionInterfaces.ts
import {
    SET_MAX_VALUE,
    SET_START_VALUE,
    SET_COUNTER_ELEMENT,
    SET_GLOBAL_ERROR,
    INCREMENT_COUNTER,
    RESET_COUNTER,
  } from './actionTypes';
  
  interface SetMaxValueAction {
    type: typeof SET_MAX_VALUE;
    payload: number;
  }
  
  interface SetStartValueAction {
    type: typeof SET_START_VALUE;
    payload: number;
  }
  
  interface SetCounterElementAction {
    type: typeof SET_COUNTER_ELEMENT;
    payload: number;
  }
  
  interface SetGlobalErrorAction {
    type: typeof SET_GLOBAL_ERROR;
    payload: boolean;
  }
  
  interface IncrementCounterAction {
    type: typeof INCREMENT_COUNTER;
  }
  
  interface ResetCounterAction {
    type: typeof RESET_COUNTER;
  }
  
  export type CounterActionTypes =
    | SetMaxValueAction
    | SetStartValueAction
    | SetCounterElementAction
    | SetGlobalErrorAction
    | IncrementCounterAction
    | ResetCounterAction;