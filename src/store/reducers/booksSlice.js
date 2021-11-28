import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  totalItems: null,
  isLoading: false,
  error: null,
  startIndex: 0,
  searchValue: '',
  category: '',
  sortedBy: 'relevance',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooks(state, action) {
      state.isLoading = true;
      state.searchValue = action.payload;
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
    changeSort(state, action) {
      state.sortedBy = action.payload;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },

    clearBooksState(state) {
      state.books = [];
      state.totalItems = null;
      state.isLoading = false;
      state.error = null;
      state.startIndex = 0;
      state.searchValue = '';
    },
  },
});

export const {
  fetchBooks,
  fetchBooksSuccess,
  fetchBooksError,
  fetchMoreBooks,
  clearBooksState,
  changeSort,
  changeCategory,
} = booksSlice.actions;

export default booksSlice.reducer;
