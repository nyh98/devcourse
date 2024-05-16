import React, { ChangeEvent, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { icon, input, sideForm } from './SideForm.css';
import { useTypeDispatch } from '../../../hooks/redux';
import { v4 as uuid } from 'uuid';
import { addBoard } from '../../../store/slices/boardsSlice';
import { addLog } from '../../../store/slices/loggerSlice';

type TSideFormProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
};

export default function SideForm({ setIsFormOpen, inputRef }: TSideFormProps) {
  const [inputText, setInputTExt] = useState('');
  const dispatch = useTypeDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTExt(e.target.value);
  };

  const handleClick = () => {
    if (inputText) {
      dispatch(addBoard({ board: { boardId: uuid(), boardName: inputText, lists: [] } }));
      dispatch(
        addLog({
          logId: uuid(),
          logMessage: `게시판 등록 : ${inputText}`,
          logAuthor: 'User',
          logTimestamp: String(Date.now()),
        })
      );
    }
  };

  return (
    <div className={sideForm}>
      <input
        ref={inputRef}
        className={input}
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={() => setIsFormOpen(false)}
      />
      <FiCheck className={icon} onMouseDown={handleClick} />
    </div>
  );
}
