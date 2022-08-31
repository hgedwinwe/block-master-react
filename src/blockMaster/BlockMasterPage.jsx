import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadAll } from '../store';
import { MovieList } from './';

export const BlockMasterPage = () => {
  const { movies, title } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadAll());
  }, []);

  return (
    <>
      <MovieList movies={movies} title={title} />
    </>
  );
};
