import { useSelector } from 'react-redux';
import { MovieCard } from '../../ui';

export const MovieList = ({ movies = [], title = '' }) => {
  return (
    <>
      <section className="movies">
        <div className="wrapper">
          <div className="movies-content">
            <h2 className="title">{title}</h2>
            <div className="grid-movies">
              {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
