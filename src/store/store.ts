// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import customerReducer from './customerReviewsSlice'
import modalReducer from './modalsSlice'
import authReducer from './authSlice'
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    customerReviews: customerReducer, 
    modals: modalReducer, 
    auth: authReducer, 
    [apiSlice.reducerPath] : apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware), 
devTools: true //switch to false when in production
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
