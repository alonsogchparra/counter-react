import React, { Component } from 'react';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput />
        <CounterControl label="Increment" />
        <CounterControl label="Decrement" />
        <CounterControl label="Add" />
        <CounterControl label="Subtract" />
        <div>Show Result</div>
      </div>
    )
  }
}

export default Counter;