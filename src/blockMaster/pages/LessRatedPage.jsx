import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadLessRated } from '../../store';
import { MovieList } from '../components/MovieList';

export const LessRatedPage = () => {
  const dispatch = useDispatch();
  const { lessRated, title } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(startLoadLessRated());
  }, []);
  return <MovieList movies={lessRated} title={title} />;
};
