import React, { Component } from 'react';

class Counter extends Component {
  // constructor 메서드를 선언하지 않고도 state 초깃값 설정 가능
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // state 값 변경시에는 this.setState 사용
            this.setState({ number: number + 1 });
            this.setState(
              (prevState, props) => {
                return {
                  number: prevState.number + 1,
                };
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
