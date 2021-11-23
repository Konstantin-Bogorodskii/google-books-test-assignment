import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
