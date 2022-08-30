import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    title: '',
    isLoadingMovies: true,
    movies: [],
    topRated: [],
    lessRated: [],
    movieSelected: null,
  },
  reducers: {
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
  },
});

export const { onLoadMovies, onGetAllMovies, onGetTopRated, onGetLessRated } =
  movieSlice.actions;
