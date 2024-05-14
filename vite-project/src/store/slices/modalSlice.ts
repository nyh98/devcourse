import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types';

interface IModalState {
  boardId: string;
  listId: string;
  task: ITask;
}

const initialState: IModalState = {
  boardId: 'board-0',
  listId: 'list-0',
  task: { taskId: 'task-0', taskName: 'task 0', taskDescription: 'task tastDescription', taskOwner: 'john' },
};

const modalSlice = createSlice({ name: 'modal', initialState, reducers: {} });

export const modalReducer = modalSlice.reducer;
