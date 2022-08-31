import { configureStore } from '@reduxjs/toolkit';
import { movieSlice, uiSlice } from './';

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    ui: uiSlice.reducer,
  },
});
