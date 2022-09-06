import { useEffect } from 'react';
import { useMovie } from '../../hooks';
import { MovieList } from '../components/MovieList';

export const LessRatedPage = () => {
  const { loadMovies, movies } = useMovie();

  useEffect(() => {
    loadMovies();
  }, []);
  return (
    <MovieList
      movies={movies.filter((resp) => resp.vote_average < 7)}
      title="Menos valoradas"
    />
  );
};
