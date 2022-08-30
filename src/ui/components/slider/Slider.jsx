import { useSelector } from 'react-redux';
import { useFetchMoviePlayingNow } from '../../../hooks';
import { SilderItem } from './SilderItem';

export const Slider = () => {
  // const { playingNow } = useFetchMoviePlayingNow();
  const { covers } = useSelector((state) => state.movie);

  return (
    <>
      <section className="slider">
        <div className="wrapper">
          <div className="slider-content">
            <div className="slide-container">
              {covers.slice(5, 8).map((movie) => {
                const imgPoster = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
                return (
                  <SilderItem key={movie.id} id={movie.id} image={imgPoster} />
                );
              })}
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
