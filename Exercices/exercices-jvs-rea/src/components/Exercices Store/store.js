import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice';
import tasksSlice from './taskSlice';


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    tasks: tasksSlice.reducer,
  },
})