import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  totalItems: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks(state, action) {
      state.books = action.payload.items;
      state.totalItems = action.payload.totalItems;
    },
    setBook(state) {
      state.books = [];
    },
  },
});

export const { getBooks, setBook } = booksSlice.actions;

export const selectBooks = state => state.books.books;

export default booksSlice.reducer;
