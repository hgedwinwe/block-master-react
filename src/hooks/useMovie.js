import { useDispatch, useSelector } from 'react-redux';
import {
  startAddMovies,
  startclearMovie,
  startDisabledSelectMovie,
  startLoadingMovieSearch,
  startLoadinMovies,
  startReloadMovies,
  startSelectMovie,
} from '../store';

export const useMovie = () => {
  const dispatch = useDispatch();

  const { movieSelected, isLoadingMovies, movieSearch, reloadMovies, movies } =
    useSelector((state) => state.movie);

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

  const loadMovies = () => {
    dispatch(startLoadinMovies());
  };

  const addMovies = (page) => {
    dispatch(startAddMovies(page));
  };
  const isReloadMovies = (isReload) => {
    dispatch(startReloadMovies(isReload));
  };

  return {
    //propiedades
    movieSelected,
    isLoadingMovies,
    movieSearch,
    reloadMovies,
    movies,

    //metodos
    loadMovies,
    selectedCurrentMovie,
    setDisabledCurrentMovie,
    searchMovie,
    clearMovie,
    addMovies,
    isReloadMovies,
  };
};
