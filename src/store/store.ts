// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import customerReducer from './customerReviewsSlice'
import modalReducer from './modalsSlice'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    customerReviews: customerReducer, 
    modals: modalReducer, 
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
