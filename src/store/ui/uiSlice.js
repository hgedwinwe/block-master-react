import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isModalOpen: false,
    searchModalOpen: false,
  },
  reducers: {
    onOpenModal: (state) => {
      state.isModalOpen = true;
    },

    onCloseModal: (state) => {
      state.isModalOpen = false;
    },

    onOpenModalSearch: (state) => {
      state.searchModalOpen = true;
    },

    onCloseModalSearch: (state) => {
      state.searchModalOpen = false;
    },
  },
});

export const {
  onCloseModal,
  onCloseModalSearch,
  onOpenModal,
  onOpenModalSearch,
} = uiSlice.actions;
