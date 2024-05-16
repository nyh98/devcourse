import React, { useRef, useState } from 'react';
import { useTypeSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { FiPlusCircle } from 'react-icons/fi';
import { addButton, addSection, boardItem, boardItemActive, container, title } from './BoardList.css';
import clsx from 'clsx';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

export default function BoardList({ activeBoardId, setActiveBoardId }: TBoardListProps) {
  const { boardArray } = useTypeSelector(state => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className={container}>
      <div className={title}>게시판 : </div>
      {boardArray.map((board, index) => (
        <div
          key={board.boardId}
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={clsx({
            [boardItemActive]: boardArray.findIndex(bo => bo.boardId === activeBoardId) === index,
            [boardItem]: boardArray.findIndex(b => b.boardId === activeBoardId) !== index,
          })}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen} />
        ) : (
          <FiPlusCircle className={addButton} onClick={handleClick} />
        )}
      </div>
    </div>
  );
}
