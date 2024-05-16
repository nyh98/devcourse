import React from 'react';
import { Description, container, title } from './Task.css';

type TTaskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
};

export default function Task({ index, id, boardId, taskName, taskDescription }: TTaskProps) {
  return (
    <div className={container}>
      <div className={title}>{taskName}</div>
      <div className={Description}>{taskDescription}</div>
    </div>
  );
}
