import { useState } from 'react';
import { appContainer, board, buttons } from './App.css.ts';
import BoardList from './componets/BoardList/BoardList.tsx';
import ListsContainer from './componets/ListContainer/ListsContainer.tsx';
import { useTypeSelector } from './hooks/redux.ts';

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');

  const boards = useTypeSelector(state => state.boards.boardArray);

  const { lists, boardId } = boards.filter(board => board.boardId === activeBoardId)[0];

  return (
    <div className={appContainer}>
      <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId} />
      <div className={board}>
        <ListsContainer lists={lists} boardId={boardId} />
      </div>
      <div className={buttons}>
        <button>이 게시판 삭제하기</button>
        <button></button>
      </div>
    </div>
  );
}

export default App;
