import { getEnvVariables } from '../../helpers';
import {
  onGetAllMovies,
  onGetLessRated,
  onGetTopRated,
  onLoadCovers,
  onLoadMovies,
} from './movieSlice';

const { VITE_MDB_API_URL, VITE_API_KEY } = getEnvVariables();

export const startLoadinMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      const url = `${VITE_MDB_API_URL}/discover/movie?api_key=${VITE_API_KEY}&language=es-ES&page=${page}`;
      const resp = await fetch(url);
      const { results } = await resp.json();

      console.log('start load movies');
      dispatch(onLoadMovies(results));
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
      const url = `${VITE_MDB_API_URL}/movie/now_playing?api_key=${VITE_API_KEY}&language=es-ES&page=1`;
      const resp = await fetch(url);
      const { results } = await resp.json();

      console.log('start load covers');
      dispatch(onLoadCovers(results));
    } catch (error) {
      console.log('Error cargando cover de peliculas');
      console.log(error);
    }
  };
};