import { useUiStore } from '../../../hooks';

export const ModalPage = () => {
  const { isModalOpen, closeModal } = useUiStore();

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      {/* <div className="modalPage show-modal"> */}
      <div className={`modalPage ${!isModalOpen ? 'show-modal' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={handleCloseModal}>
              <i className="icon-delete"></i>
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-body-image">
              <img
                src="https://image.tmdb.org/t/p/w500/miZFgV81xG324rpUknQX8dtXuBl.jpg"
                alt=""
              />
            </div>
            <div className="modal-body-description">
              <h2>Infamus</h2>
              <p>
                Arielle nació en un pueblo pequeño, pero sueña con ser famosa.
                Tras conocer a Dean, un delincuente, la pareja empieza a asaltar
                negocios y presumir de sus fechorías en las redes sociales, en
                busca de una notoriedad manchada de sangre.
              </p>
              <div className="description-time">
                <span>2020</span>
                <span>crimen suspenso</span>
                <span>1h 40m</span>
              </div>
              <div className="actions">
                <button className="btn btn-yelow">
                  <i className="icon-play"></i> VER AHORA
                </button>

                <button className="btn btn-black">
                  <i className="icon-plus"></i> VER DESPUÉS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
