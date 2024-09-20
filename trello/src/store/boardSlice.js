import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [
    { id: 1, title: "Project Alpha" },
    { id: 2, title: "Project Beta" }
  ],
  lists: [
    { id: 1, boardId: 1, title: "To Do" },
    { id: 2, boardId: 1, title: "In Progress" },
    { id: 3, boardId: 1, title: "Done" },
    { id: 4, boardId: 2, title: "Backlog" },
    { id: 5, boardId: 2, title: "Review" }
  ],
  tasks: [
    { id: 1, listId: 1, title: "Task 1", description: "Description for Task 1" },
    { id: 2, listId: 1, title: "Task 2", description: "Description for Task 2" },
    { id: 4, listId: 3, title: "Task 4", description: "Description for Task 4" },
    { id: 5, listId: 3, title: "Task 5", description: "Description for Task 5" },
    { id: 6, listId: 4, title: "Task 6", description: "Description for Task 6" },
    { id: 7, listId: 4, title: "Task 7", description: "Description for Task 7" },
    { id: 8, listId: 5, title: "Task 8", description: "Description for Task 8" },
    { id: 9, listId: 5, title: "Task 9", description: "Description for Task 9" }
  ]
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { listId, task } = action.payload;
      state.tasks.push({ ...task, id: Date.now(), listId });
    },
    addList: (state, action) => {
      const { boardId, title } = action.payload;
      state.lists.push({ id: Date.now(), boardId, title });
    },
    addBoard: (state, action) => {
      state.boards.push({ ...action.payload, id: Date.now() });
    },
  },
});

export const { addTask, addList, addBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
