import { useMovie } from '../../hooks';
import { MovieList } from '../';
import { PageNotFound } from '../../ui';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const SearchPage = () => {
  const location = useLocation();
  const { search } = location;
  const { movieSearch } = useMovie();

  const { q = '' } = queryString.parse(search);

  return movieSearch.length === 0 ? (
    <PageNotFound resut={q} />
  ) : (
    <MovieList movies={movieSearch} title="Resultados de búsqueda" />
  );
};
