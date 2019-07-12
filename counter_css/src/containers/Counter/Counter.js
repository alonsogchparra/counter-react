import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import * as actions from '../../store/actions';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract" clicked={this.props.onSubtractCounter} />
        <button>Show Result</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actions.increment()),
    onDecrementCounter: () => dispatch(actions.decrement()),
    onAddCounter: () => dispatch(actions.add(10)),
    onSubtractCounter: () => dispatch(actions.subtract(15))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);