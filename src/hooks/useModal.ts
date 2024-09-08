import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { openModal, closeModal } from '../store/modalsSlice';

const useModal = (modalKey: string) => {
  const dispatch = useDispatch<AppDispatch>();

  // Selector to check if the modal is open
  const isOpen = useSelector((state: RootState) => state.modals.openModalKey === modalKey);

  // Functions to open and close the modal
  const open = () => dispatch(openModal(modalKey));
  const close = () => dispatch(closeModal());

  return {
    isOpen,
    open,
    close,
  };
};

export default useModal;

