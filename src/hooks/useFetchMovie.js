import { useEffect, useState } from 'react';
import { getDiscoverData, getPlayonNow } from '../helpers';

export const useFetchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const newMovies = await getDiscoverData();
    setMovies(newMovies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    movies,
    isLoading,
  };
};
