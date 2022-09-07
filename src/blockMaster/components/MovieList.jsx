import { useEffect } from 'react';
import { useCallback, useRef } from 'react';
import { useCounter, useMovie } from '../../hooks';
import { Loader, MovieCard } from '../../ui';

export const MovieList = ({ movies = [], title = '' }) => {
  const { isLoadingMovies, reloadMovies, addMovies, isReloadMovies } =
    useMovie();

  const { counter, increment } = useCounter(1);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      isReloadMovies(true);
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          increment();

          addMovies(counter);
          return;
        }
      });

      if (node) {
        observer.current.observe(node);
        isReloadMovies(false);
      }
    },
    [reloadMovies]
  );

  return (
    <>
      <section className="movies" aria-labelledby="grid-de-peliculas">
        <div className="wrapper">
          <div className="movies-content">
            {isLoadingMovies ? (
              <div className="content">
                <Loader />
              </div>
            ) : (
              <>
                <h2 className="title" id="grid-de-peliculas">
                  {title}
                </h2>
                <div className="grid-movies">
                  {movies.map((movie, index) => {
                    if (movies.length === index + 1) {
                      return (
                        <div ref={lastElementRef} key={movie.id}>
                          <MovieCard movie={movie} />
                        </div>
                      );
                    } else {
                      return (
                        <div key={movie.id}>
                          <MovieCard movie={movie} />
                        </div>
                      );
                    }
                  })}
                </div>
              </>
            )}
            <div>
              {reloadMovies && (
                <>
                  <div className="content">
                    <Loader />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
