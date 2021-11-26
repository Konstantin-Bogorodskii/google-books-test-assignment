import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksReducer from './reducers/booksSlice';
import bookReducer from './reducers/selectedBookSlice';

const rootReducer = combineReducers({ booksReducer, bookReducer });
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
