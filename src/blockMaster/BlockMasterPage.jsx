import { useEffect } from 'react';
import { useMovie } from '../hooks';
import { MovieList } from './';

export const BlockMasterPage = () => {
  const { loadMovies, movies } = useMovie();

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <MovieList movies={movies} title="Todas las peliculas" />
    </>
  );
};
