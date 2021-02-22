import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Counter(props) {
  const { value, onIncrement, onDecrement } = props;

  return (
    <p>
      Clicked: {value} times
      {' '}
      <button onClick={onIncrement}>
        +
      </button>
      {' '}
      <button onClick={onDecrement}>
        -
      </button>
    </p>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};