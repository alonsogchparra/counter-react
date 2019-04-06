import React, { Component } from 'react';

import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput />
        <div>CounterControl</div>
        <div>CounterControl</div>
        <div>CounterControl</div>
        <div>CounterControl</div>
        <div>Show Result</div>
      </div>
    )
  }
}

export default Counter;