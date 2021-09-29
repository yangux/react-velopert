import React, { useState } from 'react';

const Say = () => {
  /*
    주의! 
    state 값을 바꿀 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 한다. 
    (state 값을 바로 바꾸려고 하면 안됨)
  */
  const [message, setMessage] = useState(''); // 배열 비구조화 할당 문법
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
