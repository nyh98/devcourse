import React from 'react';
import { Description, container, title } from './Task.css';
import { Draggable } from 'react-beautiful-dnd';

type TTaskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
};

export default function Task({ index, id, boardId, taskName, taskDescription }: TTaskProps) {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={container}>
          <div className={title}>{taskName}</div>
          <div className={Description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
}
