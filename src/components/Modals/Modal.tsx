import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { closeModal } from '../../store/modalsSlice';

// Define a type for the props
interface ModalProps {
    modalKey: string; // Unique key for each modal
    children: React.ReactNode;
  }


const Modal: React.FC<ModalProps> = ({ modalKey, children }) => {
    const dispatch = useDispatch<AppDispatch>();
    // const isOpen = useSelector((state: RootState) => state.modals.modals[modalKey]);
    const isOpen = useSelector((state: RootState) => state.modals.openModalKey === modalKey);

  
    // If the modal is not open, return null to render nothing
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-start justify-center z-20 mt-32">
        <div className="fixed inset-0 bg-black opacity-60" onClick={() => dispatch(closeModal())}></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-full md:w-2/3 lg:w-1/3 py-2 px-6 max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => dispatch(closeModal())}
            className="absolute top-0 right-0 mt-3 mr-4 text-xl"
            aria-label="Close modal"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  