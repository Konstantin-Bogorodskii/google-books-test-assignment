import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null,
  isLoading: false,
  error: null,
};

export const selectedBookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    fetchBook(state) {
      state.isLoading = true;
    },
    fetchBookSuccess(state, action) {
      state.book = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchBookError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBook, fetchBookSuccess, fetchBookError } = selectedBookSlice.actions;

export default selectedBookSlice.reducer;
