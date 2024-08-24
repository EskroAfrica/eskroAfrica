// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import customerReducer from './customerReviewsSlice'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    customerReviews: customerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
