import React from 'react';
import { useTypeSelector } from '../../hooks/redux';
import { FiX } from 'react-icons/fi';
import LogItem from './LogItem/LogItem';
import { body, closeButton, header, modalWindow, title, wrapper } from './LoggerModal.css';

type TLoggerMoadlProps = {
  setIsLoggerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoggerModal({ setIsLoggerOpen }: TLoggerMoadlProps) {
  const logs = useTypeSelector(state => state.logger.logArray);

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>활동 기록</div>
          <FiX className={closeButton} onClick={() => setIsLoggerOpen(false)} />
        </div>
        <div className={body}>
          {logs.map(log => (
            <LogItem key={log.logId} logItem={log} />
          ))}
        </div>
      </div>
    </div>
  );
}
