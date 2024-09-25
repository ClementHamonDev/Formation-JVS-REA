import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice';
import tasksSlice from './taskSlice';
import profileSlice from './profileSlice';


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    tasks: tasksSlice.reducer,
    profile : profileSlice.reducer
  },
})