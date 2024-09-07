// modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
    modals: { [key: string]: boolean };
  }

// Define the initial state using the ModalState type
const initialState: ModalState = {
    modals: {}
};

// Create the slice with type annotations
const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
      // Action to open a modal
      openModal: (state, action: PayloadAction<string>) => {
        state.modals[action.payload] = true;
      },
      // Action to close a modal
      closeModal: (state, action: PayloadAction<string>) => {
        state.modals[action.payload] = false;
      },
    },
  });

// Export the actions
export const { openModal, closeModal } = modalsSlice.actions;

// Export the reducer to be included in the store
export default modalsSlice.reducer;
