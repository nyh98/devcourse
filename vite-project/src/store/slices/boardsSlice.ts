import { createSlice } from '@reduxjs/toolkit';
import { IBoard } from '../../types';

type TboardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: TboardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: '첫 번째 게시물',
      lists: [
        {
          listId: 'list-0',
          listName: 'list 1',
          tasks: [{ taskId: 'task-0', taskName: 'task 1', taskDescription: 'Description', taskOwner: 'john' }],
        },
        {
          listId: 'list-1',
          listName: 'list 2',
          tasks: [{ taskId: 'task-3', taskName: 'task 3', taskDescription: 'Description', taskOwner: 'john' }],
        },
      ],
    },
  ],
};

const boardSlice = createSlice({ name: 'board', initialState, reducers: {} });

export const boardsReducer = boardSlice.reducer;
