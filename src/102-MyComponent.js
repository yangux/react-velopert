import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        props.name: {name}, <br />
        props.children: {children}, <br />
        {favoriteNumber}의 PropTypes를 지정합니다.
      </div>
    );
  }
}

export default MyComponent;
