import imagecard from '../../../assets/images/artemis-fowl.jpg';

export const MovieCard = () => {
  return (
    <>
      <div className="movie-item">
        <div className="card">
          <div className="card-content">
            <div className="ranking-point">
              <div className="ranking-content">
                <i className="icon-star"></i>
                <span className="point">7.1</span>
              </div>
            </div>
            <div className="image">
              <img src={imagecard} alt="portada de ava" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
