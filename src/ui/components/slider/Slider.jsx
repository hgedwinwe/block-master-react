import { useSelector } from 'react-redux';
import { Loader } from '../Loader';
import { SilderItem } from './SilderItem';

export const Slider = () => {
  const { covers, isLoadingMovies } = useSelector((state) => state.movie);

  return (
    <>
      <section className="slider" aria-label="banner de navegación">
        <div className="wrapper">
          <div className="slider-content">
            <div className="slide-container">
              {!isLoadingMovies ? (
                covers.slice(0, 3).map((movie) => {
                  const imgPoster = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
                  return (
                    <SilderItem
                      key={movie.id}
                      id={movie.id}
                      image={imgPoster}
                    />
                  );
                })
              ) : (
                <div className="content slider">
                  <Loader />
                </div>
              )}
            </div>

            <div className="silder-bullet-list">
              <span className="bullet bullet-selected"></span>
              <span className="bullet"></span>
              <span className="bullet"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
