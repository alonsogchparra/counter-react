import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract" clicked={this.props.onSubtractCounter} />
        <div>Show Result</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch (actionCreators.increment()),
    onDecrementCounter: () => dispatch (actionCreators.decrement()),
    onAddCounter: () => dispatch (actionCreators.add(10)),
    onSubtractCounter: () => dispatch (actionCreators.subtract(15))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);