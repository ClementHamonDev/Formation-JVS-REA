import boardReducer, { addTask, initialState } from '../store/boardSlice';

describe('boardSlice', () => {


    test('should return the initial state', () => {
        expect(boardReducer(initialState, {})).toEqual(initialState);
    });

    test('should handle addTask', () => {
        const newTask = { title: "New Task", description: "New Task Description" };
        const action = addTask({ listId: 1, task: newTask });
        const newState = boardReducer(initialState, action);

        expect(newState.tasks.length).toBe(initialState.tasks.length + 1);
        expect(newState.tasks[initialState.tasks.length]).toEqual({
            id: expect.any(Number),
            listId: 1,
            title: "New Task",
            description: "New Task Description"
        });
    });
});