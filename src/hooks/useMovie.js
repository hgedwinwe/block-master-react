import { useDispatch, useSelector } from 'react-redux';
import {
  startclearMovie,
  startDisabledSelectMovie,
  startLoadingMovieSearch,
  startSelectMovie,
} from '../store';

export const useMovie = () => {
  const dispatch = useDispatch();

  const { movieSelected, isLoadingMovies, movieSearch } = useSelector(
    (state) => state.movie
  );

  const selectedCurrentMovie = (movieSelected) => {
    dispatch(startSelectMovie(movieSelected));
  };

  const setDisabledCurrentMovie = () => dispatch(startDisabledSelectMovie());

  const searchMovie = (movie) => {
    dispatch(startLoadingMovieSearch(movie));
  };

  const clearMovie = () => {
    dispatch(startclearMovie());
  };

  return {
    //propiedades
    movieSelected,
    isLoadingMovies,
    movieSearch,

    //metodos
    selectedCurrentMovie,
    setDisabledCurrentMovie,
    searchMovie,
    clearMovie,
  };
};
