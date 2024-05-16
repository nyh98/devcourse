import React from 'react';
import { IList } from '../../types';
import List from '../List/List';
import ActionButton from '../ActionButton/ActionButton';
import { listsContainer } from './ListContainer.css';

type TListsContainerProps = {
  boardId: string;
  lists: IList[];
};

export default function ListsContainer({ lists, boardId }: TListsContainerProps) {
  return (
    <div className={listsContainer}>
      {lists.map(list => (
        <List key={list.listId} list={list} boardId={boardId} />
      ))}

      <ActionButton boardId={boardId} listId={''} list />
    </div>
  );
}
