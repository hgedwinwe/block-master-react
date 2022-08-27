import { getEnvVariables } from './';

const { VITE_MDB_API_URL, VITE_API_KEY } = getEnvVariables();

export const getDiscoverData = async (page = 1) => {
  const url = `${VITE_MDB_API_URL}/discover/movie?api_key=${VITE_API_KEY}&language=es-ES&page=${page}`;

  const resp = await fetch(url);

  const { results } = await resp.json();

  return results;
};

export const getPlayonNow = async () => {
  // https://api.themoviedb.org/3/movie/now_playing?api_key=1a874ef005de067ae1ee5fe75031c734&language=en-US&page=1
  const url = `${VITE_MDB_API_URL}/movie/now_playing?api_key=${VITE_API_KEY}&language=es-ES&page=1`;
  const resp = await fetch(url);

  const { results: playingNow } = await resp.json();
  return playingNow;
};
