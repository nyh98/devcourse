import React from 'react';
interface Todo {
  id: number;
  title: string;
  isChecked: boolean;
}
interface TodoModalProps {
  item: Todo;
}

export default function TodoModal({ item }: TodoModalProps) {
  return (
    <div>
      <h3>Todo 상세 정보</h3>
      <p>{(item.id, item.title, item.isChecked)}</p>
    </div>
  );
}
