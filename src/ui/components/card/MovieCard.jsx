import { getEnvVariables } from '../../../helpers';
import { useUiStore } from '../../../hooks';

export const MovieCard = ({ id, poster_path, vote_average, riginal_title }) => {
  const { VITE_MDB_API_IMAGE_URL } = getEnvVariables();
  const imgPoster = `${VITE_MDB_API_IMAGE_URL}${poster_path}`;

  const { openModal } = useUiStore();

  const handleClick = () => {
    openModal();
  };

  return (
    <>
      <div className="movie-item">
        <div className="card" onClick={handleClick}>
          <div className="card-content">
            <div className="ranking-point">
              {/* <div className="ranking-content "> */}
              <div
                className={
                  vote_average < 7
                    ? 'ranking-content is-featured'
                    : 'ranking-content'
                }
              >
                <i className="icon-star"></i>
                <span className="point">{vote_average}</span>
              </div>
            </div>
            <div className="image">
              <img src={imgPoster} alt={riginal_title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
