import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task !== action.payload);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
