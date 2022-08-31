import { useDispatch, useSelector } from 'react-redux';
import { startDisabledSelectMovie, startSelectMovie } from '../store';

export const useMovie = () => {
  const dispatch = useDispatch();

  const { movieSelected } = useSelector((state) => state.movie);

  const selectedCurrentMovie = (movieSelected) => {
    dispatch(startSelectMovie(movieSelected));
  };

  const setDisabledCurrentMovie = () => dispatch(startDisabledSelectMovie());

  return {
    //propiedades
    movieSelected,

    //metodos
    selectedCurrentMovie,
    setDisabledCurrentMovie,
  };
};
