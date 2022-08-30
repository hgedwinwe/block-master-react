import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieList } from '../';
import { startLoadonTopRated } from '../../store';

export const TopRatedPage = () => {
  const dispatch = useDispatch();
  const { topRated, title } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(startLoadonTopRated());
  }, []);

  return <MovieList movies={topRated} title={title} />;
};
