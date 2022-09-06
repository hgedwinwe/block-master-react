import { useMovie } from '../../hooks';
import { MovieCard, PageNotFound } from '../../ui';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const SearchPage = () => {
  const location = useLocation();
  const { search } = location;
  const { movieSearch } = useMovie();

  const { q = '' } = queryString.parse(search);

  if (movieSearch.length === 0) {
    return <PageNotFound resut={q} />;
  } else {
    return (
      <>
        <section className="movies">
          <div className="wrapper">
            <div className="movies-content">
              <h2 className="title">Resultados de búsqueda para {q}</h2>
              <div className="grid-movies">
                {movieSearch.map((movie) => {
                  return (
                    <div key={movie.id}>
                      <MovieCard movie={movie} />
                    </div>
                  );
                })}
              </div>

              <div></div>
            </div>
          </div>
        </section>
      </>
    );
  }
};
