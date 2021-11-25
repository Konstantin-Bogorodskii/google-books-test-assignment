import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksReducer from './reducers/booksSlice';

const rootReducer = combineReducers({ booksReducer });
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
