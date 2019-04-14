import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={55} />
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