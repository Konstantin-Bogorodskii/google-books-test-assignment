import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  totalItems: null,
  isLoading: false,
  error: null,
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
      state.error = null;
    },
    fetchBooksError(state, action) {
      state.books = [];
      state.totalItems = null;
      state.isLoading = false;
      state.error = action.payload;
    },
    setBook(state) {
      state.books = [];
    },
  },
});

export const { fetchBooks, fetchBooksSuccess, fetchBooksError } = booksSlice.actions;

export default booksSlice.reducer;
