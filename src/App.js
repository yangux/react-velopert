import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ScrollBox from './152-ScrollBox';

/*
  ** 컴포넌트에 ref 달기 **
  컴포넌트 외부에서 내부에 있는 메서드 및 멤버 변수에 접근할 수 있다
  (ex: myComponent.handleClick, myComponent.input 등)
*/

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
