import { useEffect } from 'react';
import { MovieList } from '../';
import { useMovie } from '../../hooks';

export const TopRatedPage = () => {
  const { loadMovies, movies } = useMovie();

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <MovieList
      movies={movies.filter((resp) => resp.vote_average > 7)}
      title="Más valoradas"
    />
  );
};
