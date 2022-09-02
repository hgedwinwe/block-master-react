import { useDispatch, useSelector } from 'react-redux';
import {
  onCloseModal,
  onCloseModalSearch,
  onOpenModal,
  onOpenModalSearch,
} from '../store';

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isModalOpen, searchModalOpen } = useSelector((state) => state.ui);

  /* ······························ */
  const openModal = () => {
    dispatch(onOpenModal());
  };

  /* ······························ */
  const closeModal = () => {
    dispatch(onCloseModal());
  };

  /* ······························ */
  const openModalSearch = () => {
    dispatch(onOpenModalSearch());
  };

  /* ······························ */
  const closeModalSearch = () => {
    dispatch(onCloseModalSearch());
  };

  return {
    // * propiedad
    isModalOpen,
    searchModalOpen,

    // * metodos
    openModal,
    closeModal,
    openModalSearch,
    closeModalSearch,
  };
};
