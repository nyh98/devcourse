import React, { ChangeEvent, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useTypeDispatch } from '../../../hooks/redux';
import { addList, addTask } from '../../../store/slices/boardsSlice';
import { v4 as uuid } from 'uuid';
import { addLog } from '../../../store/slices/loggerSlice';
import { button, buttons, close, input, listForm, taskForm } from './DropDownForm.css';

type TDroptDownFormProps = {
  boardId: string;
  listId: string;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list?: boolean;
};

export default function DropDownForm({ boardId, listId, list, setIsFormOpen }: TDroptDownFormProps) {
  const [text, setText] = useState('');
  const dispatch = useTypeDispatch();
  const formPlaceholder = list ? '리스트의 제목을 입력하세요.' : '일의 제목을 입력하세요.';

  const buttonTItle = list ? '리스트 추가하기' : '일 추가하기';

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    if (text) {
      if (list) {
        dispatch(addList({ boardId, list: { listId: uuid(), listName: text, tasks: [] } }));
        dispatch(
          addLog({
            logId: uuid(),
            logMessage: `리스트 생성하기 : ${text}`,
            logAuthor: 'User',
            logTimestamp: String(Date.now()),
          })
        );
      } else {
        dispatch(
          addTask({ boardId, listId, task: { taskId: uuid(), taskName: text, taskDescription: '', taskOwner: 'User' } })
        );
        dispatch(
          addLog({
            logId: uuid(),
            logMessage: `일 생성하기 : ${text}`,
            logAuthor: 'User',
            logTimestamp: String(Date.now()),
          })
        );
      }
    }
  };

  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        autoFocus
        placeholder={formPlaceholder}
        onBlur={() => setIsFormOpen(false)}
        value={text}
        onChange={handleTextChange}
      />
      <div className={buttons}>
        <button className={button} onMouseDown={handleButtonClick}>
          {buttonTItle}
        </button>
        <FiX className={close} />
      </div>
    </div>
  );
}
