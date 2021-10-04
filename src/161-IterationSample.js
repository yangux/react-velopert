import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  // 반복 렌더링 시 데이터가 가진 고윳값을 key 값으로 설정해야 함 (고윳값이 없을 때 index로 대체)
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
