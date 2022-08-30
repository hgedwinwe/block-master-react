import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetTopRated, startLoadonTopRated } from '../store';

export const useMovie = () => {
  const dispatch = useDispatch();
  const { movies, title } = useSelector((state) => state.movie);

  const allMovies = () => movies;

  // const topRated = () => [...movies].filter((resp) => resp.vote_average > 7);
  const topRated = () => {
    console.log('se ejecuta en hook');
    const moviejj = [...movies];
    useEffect(() => {
      dispatch(startLoadonTopRated(moviejj));
    }, []);
  };

  return {
    title,
    movies,

    allMovies,
    topRated,
  };
};
