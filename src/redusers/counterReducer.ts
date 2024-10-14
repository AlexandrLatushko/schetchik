// src/reducers/counterReducer.ts
import { CounterActionTypes } from '../actions/actionInterfaces';
import {
    SET_MAX_VALUE,
    SET_START_VALUE,
    SET_COUNTER_ELEMENT,
    SET_GLOBAL_ERROR,
    INCREMENT_COUNTER,
    RESET_COUNTER,
  } from '../actions/counterActions';
  
  interface CounterState {
    maxValue: number;
    startValue: number;
    counterElement: number;
    globalError: boolean;
  }
  
  const initialState: CounterState = {
    maxValue: Infinity,
    startValue: Infinity,
    counterElement: 0,
    globalError: false,
  };
  
  const counterReducer = (state = initialState, action: CounterActionTypes) => {
    switch (action.type) {
      case SET_MAX_VALUE:
        return { ...state, maxValue: action.payload };
      case SET_START_VALUE:
        return { ...state, startValue: action.payload };
      case SET_COUNTER_ELEMENT:
        console.log(action.payload);
        
        return { ...state, counterElement: action.payload };
      case SET_GLOBAL_ERROR:
        return { ...state, globalError: action.payload };
      case INCREMENT_COUNTER:
        return { ...state, counterElement: state.counterElement < state.maxValue ? state.counterElement + 1 : state.counterElement };
      case RESET_COUNTER:
        return { ...state, counterElement: state.startValue };
      default:
        return state;
    }
  };
  
  export default counterReducer;