import { getEnvVariables } from '../../helpers';
import {
  isOnLoadingMovie,
  onDisabledCurrentMovie,
  onGetAllMovies,
  onGetLessRated,
  onGetTopRated,
  onLoadCovers,
  onLoadMovies,
  onSearchMovie,
  onSelectedCurrentMovie,
} from './movieSlice';

const { VITE_MDB_API_URL, VITE_API_KEY } = getEnvVariables();

export const startLoadinMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch(isOnLoadingMovie(true));
      const url = `${VITE_MDB_API_URL}/discover/movie?api_key=${VITE_API_KEY}&language=es-ES&page=${page}`;
      const resp = await fetch(url);
      const { results } = await resp.json();

      dispatch(onLoadMovies(results));
      dispatch(isOnLoadingMovie(false));
    } catch (error) {
      console.log('Error cargando peliculas');
      console.log(error);
    }
  };
};

export const startLoadAll = () => {
  return (dispatch) => {
    dispatch(onGetAllMovies());
  };
};

export const startLoadonTopRated = () => {
  return (dispatch) => {
    dispatch(onGetTopRated());
  };
};

export const startLoadLessRated = () => {
  return (dispatch) => {
    dispatch(onGetLessRated());
  };
};

export const startLoadinCovers = () => {
  return async (dispatch) => {
    try {
      dispatch(isOnLoadingMovie(true));
      const url = `${VITE_MDB_API_URL}/movie/now_playing?api_key=${VITE_API_KEY}&language=es-ES&page=1`;
      const resp = await fetch(url);
      const { results } = await resp.json();

      dispatch(onLoadCovers(results));
      dispatch(isOnLoadingMovie(false));
    } catch (error) {
      console.log('Error cargando cover de peliculas');
      console.log(error);
    }
  };
};

export const startSelectMovie = (movieSelected) => {
  return (dispatch) => {
    dispatch(onSelectedCurrentMovie(movieSelected));
  };
};

export const startDisabledSelectMovie = () => {
  return (dispatch) => {
    dispatch(onDisabledCurrentMovie());
  };
};

export const startLoadingMovieSearch = (movieSearch) => {
  return async (dispatch) => {
    try {
      dispatch(isOnLoadingMovie(true));
      // https://api.themoviedb.org/3/search/movie?api_key=1a874ef005de067ae1ee5fe75031c734&language=en-US&query=Poquemon&page=1
      const url = `${VITE_MDB_API_URL}/search/movie?api_key=${VITE_API_KEY}&language=es-ES&query=${movieSearch}&page=1`;
      const resp = await fetch(url);
      const { results } = await resp.json();

      dispatch(onSearchMovie(results));
      dispatch(isOnLoadingMovie(false));
    } catch (error) {
      console.log('Error buscando peliculas');
      console.log(error);
    }
  };
};
