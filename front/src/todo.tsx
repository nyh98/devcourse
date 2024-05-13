import React, { useState } from 'react';
import TodoModal from './TodoModal';

interface Todo {
  id: number;
  title: string;
  isChecked: boolean;
}
export default function Todo() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  return (
    <div>
      <input type="text" value={input} placeholder="할일 입력" onChange={e => setInput(e.target.value)} />
      <button
        onClick={() => {
          setTodo([...todo, { id: Date.now(), title: input, isChecked: false }]);
          setInput('');
        }}
      >
        입력
      </button>
      <ul>
        {todo &&
          todo.map((item, index) => (
            <li style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                onChange={e => {
                  const copy = [...todo];
                  copy[index].isChecked = e.target.checked;
                  setTodo(copy);
                }}
              />
              {item.title}
              <button
                style={{ position: 'relative', right: '-100px' }}
                onClick={e => {
                  setTodo(todo.filter(value => value.id !== item.id));
                }}
              >
                삭제
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
