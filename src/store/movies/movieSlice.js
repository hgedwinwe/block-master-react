import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    title: '',
    isLoadingMovies: true,
    movies: [],
    topRated: [],
    lessRated: [],
    covers: [],
    movieSelected: null,
  },
  reducers: {
    onLoadCovers: (state, { payload }) => {
      state.covers = payload;
    },

    onLoadMovies: (state, { payload }) => {
      state.movies = payload;
    },

    onGetAllMovies: (state) => {
      state.title = 'Todas las peliculas';
      state.movies = state.movies;
    },

    onGetTopRated: (state, { payload }) => {
      state.title = 'Peliculas más valoradas';
      state.topRated = state.movies.filter((resp) => resp.vote_average > 7);
    },

    onGetLessRated: (state, { payload }) => {
      state.title = 'Peliculas menos valoradas';
      state.lessRated = state.movies.filter((resp) => resp.vote_average < 7);
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
  },
});

export const {
  onGetAllMovies,
  onGetLessRated,
  onGetTopRated,
  onLoadCovers,
  onLoadMovies,
  isOnLoadingMovie,
  onSelectedCurrentMovie,
  onDisabledCurrentMovie,
} = movieSlice.actions;
