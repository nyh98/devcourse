import React, { useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState<Date>(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);
  return (
    <div>
      <h2>현재 시간 : {time.toLocaleTimeString()} </h2>
    </div>
  );
}
