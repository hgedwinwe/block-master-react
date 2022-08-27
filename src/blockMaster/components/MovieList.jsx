import { useFetchMovie } from '../../hooks/useFetchMovie';
import { MovieCard } from '../../ui';

export const MovieList = ({ type = '' }) => {
  const { movies } = useFetchMovie();

  let filtrados = [];
  let title = 'Todas las peliculas';

  switch (type) {
    case 'top-rated':
      filtrados = movies.filter((resp) => resp.vote_average > 7);
      title = 'Peliculas más valoradas';
      break;
    case 'less-rated':
      filtrados = movies.filter((resp) => resp.vote_average < 7);
      title = 'Peliculas menos valoradas';
      break;

    default:
      filtrados = movies;
      break;
  }

  return (
    <>
      <section className="movies">
        <div className="wrapper">
          <div className="movies-content">
            <h2 className="title">{title}</h2>
            <div className="grid-movies">
              {filtrados.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
