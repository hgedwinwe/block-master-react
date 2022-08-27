import { useEffect, useState } from 'react';
import { getPlayonNow } from '../helpers';

export const useFetchMoviePlayingNow = () => {
  const [playingNow, setPlayingNow] = useState([]);
  const [IsLoadingPlaying, setIsLoadingPlaying] = useState(true);

  const getMoviesPlayngNow = async () => {
    const newMovies = await getPlayonNow();
    setPlayingNow(newMovies);
    setIsLoadingPlaying(false);
  };

  useEffect(() => {
    getMoviesPlayngNow();
  }, []);

  return {
    playingNow,
    IsLoadingPlaying,
  };
};
