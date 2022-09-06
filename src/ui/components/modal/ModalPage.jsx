import { useEffect } from 'react';
import { getEnvVariables } from '../../../helpers';
import { useMovie, useUiStore } from '../../../hooks';

export const ModalPage = () => {
  const { VITE_MDB_API_IMAGE_URL } = getEnvVariables();

  const { isModalOpen, closeModal } = useUiStore();
  const { movieSelected, setDisabledCurrentMovie } = useMovie();

  const imgPoster = `${VITE_MDB_API_IMAGE_URL}${movieSelected?.poster_path}`;

  const handleCloseModal = () => {
    setDisabledCurrentMovie();
    closeModal();
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setDisabledCurrentMovie();
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
    };
  }, []);

  return (
    <>
      {/* <div className="modalPage show-modal"> */}
      <div
        aria-labelledby="card-title"
        className={`modalPage ${!isModalOpen ? 'show-modal' : ''}`}
      >
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={handleCloseModal}>
              <i className="icon-delete"></i>
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-body-image">
              <img src={imgPoster} alt={movieSelected?.original_title} />
            </div>
            <div className="modal-body-description">
              <h2 id="card-title">{movieSelected?.title}</h2>
              <p> {movieSelected?.overview}</p>
              <div className="description-time">
                <span>{movieSelected?.release_date}</span>
                <span>crimen suspenso</span>
                <span>1h 40m</span>
              </div>
              <div className="actions">
                <button className="btn btn-yelow">
                  <i className="icon-play" aria-hidden="true"></i> VER AHORA
                </button>

                <button className="btn btn-black">
                  <i className="icon-plus" aria-hidden="true"></i> VER DESPUÉS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
