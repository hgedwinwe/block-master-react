import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    isLoadingMovies: true,
    reloadMovies: true,
    movies: [],
    covers: [],
    movieSearch: [],
    movieSelected: null,
  },
  reducers: {
    onLoadCovers: (state, { payload }) => {
      state.covers = payload;
    },

    onLoadMovies: (state, { payload }) => {
      state.movies = payload;
    },

    onAddMovies: (state, { payload }) => {
      payload.forEach((movie) => {
        const exists = state.movies.some((dbMovie) => dbMovie.id === movie.id);

        if (!exists) {
          state.movies.push(movie);
        }
      });
    },

    onReloadMovie: (state, { payload }) => {
      state.reloadMovies = payload;
    },

    isOnLoadingMovie: (state, { payload }) => {
      state.isLoadingMovies = payload;
    },

    onSelectedCurrentMovie: (state, { payload }) => {
      state.movieSelected = payload;
    },

    onDisabledCurrentMovie: (state) => {
      state.movieSelected = null;
    },

    onSearchMovie: (state, { payload }) => {
      state.movieSearch = payload;
    },

    onClearSearchMovie: (state) => {
      state.movieSearch = [];
    },
  },
});

export const {
  // onGetAllMovies,
  onLoadCovers,
  onLoadMovies,
  isOnLoadingMovie,
  onSelectedCurrentMovie,
  onDisabledCurrentMovie,
  onSearchMovie,
  onClearSearchMovie,
  onAddMovies,
  onReloadMovie,
} = movieSlice.actions;
