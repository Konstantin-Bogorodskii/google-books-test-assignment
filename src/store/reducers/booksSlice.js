import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  totalItems: null,
  isLoading: false,
  error: null,
  startIndex: 0,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooks(state) {
      state.isLoading = true;
    },
    fetchBooksSuccess(state, action) {
      state.books = action.payload.items;
      state.totalItems = action.payload.totalItems;
      state.isLoading = false;
      state.startIndex = state.startIndex + 12;
    },
    fetchBooksError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchMoreBooks(state, action) {
      state.books = state.books.concat(action.payload.items);
      state.totalItems = action.payload.totalItems;
      state.isLoading = false;
      state.startIndex = state.startIndex + 30;
      state.error = null;
    },
    clearBooksState(state) {
      state.books = [];
      state.totalItems = null;
      state.isLoading = false;
      state.error = null;
      state.startIndex = 0;
    },
  },
});

export const { fetchBooks, fetchBooksSuccess, fetchBooksError, fetchMoreBooks, clearBooksState } =
  booksSlice.actions;

export default booksSlice.reducer;
