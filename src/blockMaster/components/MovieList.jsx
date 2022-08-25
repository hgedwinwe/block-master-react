import { MovieCard } from '../../ui';

export const MovieList = () => {
  return (
    <>
      <section className="movies">
        <div className="wrapper">
          <div className="movies-content">
            <h2 className="title">Todas las peliculas</h2>
            <div className="grid-movies">
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
