import { getEnvVariables } from '../../../helpers';
import { useMovie, useUiStore } from '../../../hooks';
import noImage from '../../../assets/images/Searching.svg';

// export const MovieCard = ({ id, poster_path, vote_average, riginal_title, movie }) => {
export const MovieCard = ({ movie }) => {
  const { VITE_MDB_API_IMAGE_URL } = getEnvVariables();

  const imagePoster =
    movie.poster_path !== null
      ? `${VITE_MDB_API_IMAGE_URL}${movie.poster_path}`
      : noImage;

  // const imgPoster = `${VITE_MDB_API_IMAGE_URL}${movie.poster_path}`;

  const { openModal } = useUiStore();
  const { selectedCurrentMovie } = useMovie();

  const handleClick = () => {
    selectedCurrentMovie(movie);
    openModal();
  };

  return (
    <>
      <div className="movie-item" aria-label="card de pelicula">
        <div className="card" onClick={handleClick}>
          <div className="card-content">
            <div className="ranking-point">
              {/* <div className="ranking-content "> */}
              <div
                className={
                  movie.vote_average < 7
                    ? 'ranking-content is-featured'
                    : 'ranking-content'
                }
              >
                <i className="icon-star" aria-hidden="true"></i>
                <span className="point">{movie.vote_average}</span>
              </div>
            </div>
            <div className="image">
              <img src={imagePoster} alt={movie.riginal_title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
