import { useState } from 'react';
import { appContainer, board, buttons, deleteBoardbutton, loggerButton } from './App.css.ts';
import BoardList from './componets/BoardList/BoardList.tsx';
import ListsContainer from './componets/ListContainer/ListsContainer.tsx';
import { useTypeDispatch, useTypeSelector } from './hooks/redux.ts';
import EditModal from './componets/EditModal/EditModal.tsx';
import LoggerModal from './componets/LoggerModal/LoggerModal.tsx';
import { deleteBoard, sort } from './store/slices/boardsSlice.ts';
import { addLog } from './store/slices/loggerSlice.ts';
import { v4 } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const dispatch = useTypeDispatch();
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const modalActive = useTypeSelector(state => state.boards.modalActive);
  const boards = useTypeSelector(state => state.boards.boardArray);
  const [isLoggerOpen, setIsLoggerOpen] = useState(false);

  const { lists, boardId, boardName } = boards.filter(board => board.boardId === activeBoardId)[0];

  const handleDeleteBoard = () => {
    if (boards.length > 1) {
      dispatch(deleteBoard({ boardId }));

      dispatch(
        addLog({
          logId: v4(),
          logMessage: `게시판 지우기 : ${boardName}`,
          logAuthor: 'User',
          logTimestamp: String(Date.now()),
        })
      );

      const newIndexToSet = () => {
        const indexToBeDeleted = boards.findIndex(board => board.boardId === activeBoardId);

        return indexToBeDeleted === 0 ? indexToBeDeleted + 1 : indexToBeDeleted - 1;
      };

      setActiveBoardId(boards[newIndexToSet()].boardId);
    } else {
      alert('게시판 1개라 못지움');
    }
  };

  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    const sourceList = lists.filter(list => list.listId === source.droppableId);

    dispatch(
      sort({
        boardIndex: boards.findIndex(board => board.boardId === activeBoardId),
        droppableStart: source.droppableId,
        droppableEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId,
      })
    );

    dispatch(
      addLog({ logId: v4(), logMessage: `리스트 드래그함`, logAuthor: 'User', logTimestamp: String(Date.now()) })
    );
  };
  return (
    <div className={appContainer}>
      {isLoggerOpen ? <LoggerModal setIsLoggerOpen={setIsLoggerOpen} /> : null}
      {modalActive ? <EditModal /> : null}
      <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId} />
      <div className={board}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <ListsContainer lists={lists} boardId={boardId} />
        </DragDropContext>
      </div>
      <div className={buttons}>
        <button className={deleteBoardbutton} onClick={handleDeleteBoard}>
          이 게시판 삭제하기
        </button>
        <button className={loggerButton} onClick={() => setIsLoggerOpen(!isLoggerOpen)}>
          {isLoggerOpen ? '활동 목록 숨기기' : '활동 목록 보이기'}
        </button>
      </div>
    </div>
  );
}

export default App;
