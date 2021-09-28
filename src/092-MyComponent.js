import React, {Component} from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children, favoriteNumber}) => { // 비구조화 할당 문법 파라미터에 바로 쓰기
    // const {name, children} = props; // 비구조화 할당 문법
    return (
        <div>
            props.name: {name}, <br />
            props.children: {children}, <br />
            {favoriteNumber}의 PropTypes를 지정합니다.
        </div>
    )
}

MyComponent.defaultProps = {
    name: '기본이름'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;