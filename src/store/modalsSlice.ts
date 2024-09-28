import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  openModalKey: string | null;
}

const initialState: ModalState = {
  openModalKey: null,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.openModalKey = action.payload;
    },
    closeModal(state) {
      state.openModalKey = null;
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
