// src/store.ts
import {legacy_createStore as createStore } from 'redux'

import counterReducer from './redusers/counterReducer';

export const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;