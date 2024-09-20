import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './boardSlice';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
});
