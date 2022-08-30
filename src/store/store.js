import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './movies/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});
