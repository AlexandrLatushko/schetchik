// src/actions/counterActions.ts
export const SET_MAX_VALUE = 'SET_MAX_VALUE';
export const SET_START_VALUE = 'SET_START_VALUE';
export const SET_COUNTER_ELEMENT = 'SET_COUNTER_ELEMENT';
export const SET_GLOBAL_ERROR = 'SET_GLOBAL_ERROR';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

export const setMaxValueAC = (value: number) => ({
  type: SET_MAX_VALUE,
  payload: value,
});

export const setStartValueAC = (value: number) => ({
  type: SET_START_VALUE,
  payload: value,
});

export const setCounterElementAC = (value: number) => ({
  type: SET_COUNTER_ELEMENT,
  payload: value,
});

export const setGlobalErrorAC = (value: boolean) => ({
  type: SET_GLOBAL_ERROR,
  payload: value,
});

export const incrementCounterAC = () => ({
  type: INCREMENT_COUNTER,
});

export const resetCounterAC = () => ({
  type: RESET_COUNTER,
});