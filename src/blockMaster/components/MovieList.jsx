import { useSelector } from 'react-redux';
import { Loader, MovieCard } from '../../ui';

export const MovieList = ({ movies = [], title = '' }) => {
  const { isLoadingMovies } = useSelector((state) => state.movie);

  return (
    <>
      <section className="movies">
        <div className="wrapper">
          <div className="movies-content">
            {isLoadingMovies ? (
              <div className="content">
                <Loader />
              </div>
            ) : (
              <>
                <h2 className="title">{title}</h2>
                <div className="grid-movies">
                  {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
