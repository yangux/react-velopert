import React, {Component} from 'react';

const MyComponent = ({name, children}) => { // 비구조화 할당 문법 파라미터에 바로 쓰기
    // const {name, children} = props; // 비구조화 할당 문법
    return (
        <div>
            props.name: {name}, <br />
            props.children: {children}
        </div>
    )
}

MyComponent.defaultProps = {
    name: '기본이름'
}

export default MyComponent;