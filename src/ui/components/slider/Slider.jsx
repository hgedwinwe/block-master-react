import { useFetchMoviePlayingNow } from '../../../hooks';
import { SilderItem } from './SilderItem';

export const Slider = () => {
  const { playingNow } = useFetchMoviePlayingNow();

  return (
    <>
      <section className="slider">
        <div className="wrapper">
          <div className="slider-content">
            <div className="slide-container">
              {playingNow.slice(0, 3).map((movie) => {
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
