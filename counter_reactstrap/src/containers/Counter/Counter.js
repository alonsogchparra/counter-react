import React, { Component } from 'react';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value="54343" />
        <CounterControl label="Increment" />
        <CounterControl label="Decrement" />
        <CounterControl label="Add" />
        <CounterControl label="Subtract" />
        <button>Show Result</button>
      </div>
    )
  }
}

export default Counter