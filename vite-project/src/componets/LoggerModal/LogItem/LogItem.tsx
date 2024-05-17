import React from 'react';
import { ILogItem } from '../../../types';
import { BsFillPersonFill } from 'react-icons/bs';
import { author, date, logItemWrap, message } from './LogItem.css';

type TLogItemProps = {
  logItem: ILogItem;
};

export default function LogItem({ logItem }: TLogItemProps) {
  let timeOffset = new Date(Date.now() - Number(logItem.logTimestamp));

  const showOffsetTime = `
    ${timeOffset.getMinutes() > 0 ? `${timeOffset.getMinutes()}분` : ''}
    ${timeOffset.getSeconds() > 0 ? `${timeOffset.getSeconds()}초` : ''}
    ${timeOffset.getSeconds() === 0 ? 'just now' : ''}
    전`;
  return (
    <div className={logItemWrap}>
      <div className={author}>
        <BsFillPersonFill />
        {logItem.logAuthor}
      </div>
      <div className={message}>{logItem.logMessage}</div>
      <div className={date}>{showOffsetTime}</div>
    </div>
  );
}
