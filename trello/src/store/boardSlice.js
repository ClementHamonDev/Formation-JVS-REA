import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [
    {
      id: 1,
      title: "Project Alpha",
      lists: [
        {
          id: 1,
          title: "To Do",
          tasks: [
            { id: 1, title: "Task 1", description: "Description for Task 1" },
            { id: 2, title: "Task 2", description: "Description for Task 2" },
          ]
        },
        {
          id: 2,
          title: "In Progress",
          tasks: []
        },
        {
          id: 3,
          title: "Done",
          tasks: [
            { id: 4, title: "Task 4", description: "Description for Task 4" },
            { id: 5, title: "Task 5", description: "Description for Task 5" },
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Project Beta",
      lists: [
        {
          id: 4,
          title: "Backlog",
          tasks: [
            { id: 6, title: "Task 6", description: "Description for Task 6" },
            { id: 7, title: "Task 7", description: "Description for Task 7" },
          ]
        },
        {
          id: 5,
          title: "Review",
          tasks: [
            { id: 8, title: "Task 8", description: "Description for Task 8" },
            { id: 9, title: "Task 9", description: "Description for Task 9" },
          ]
        }
      ]
    }
  ]
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { boardId, listId, task } = action.payload;
      const board = state.boards.find(b => b.id === boardId);
      const list = board.lists.find(l => l.id === listId);
      list.tasks.push({ ...task, id: Date.now() });
    },
    addList: (state, action) => {
      const { boardId, list } = action.payload;
      const board = state.boards.find(b => b.id === boardId);
      board.lists.push({ ...list, id: Date.now(), tasks: [] });
    },
    addBoard: (state, action) => {
      state.boards.push({ ...action.payload, id: Date.now(), lists: [] });
    },
  },
});

export const { addTask, addList, addBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
