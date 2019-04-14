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
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Show Result</button>

        <ul>
          {this.props.results.map(result => (
            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch (actionCreators.increment()),
    onDecrementCounter: () => dispatch (actionCreators.decrement()),
    onAddCounter: () => dispatch (actionCreators.add(10)),
    onSubtractCounter: () => dispatch (actionCreators.subtract(15)),
    onStoreResult: (result) => dispatch (actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch (actionCreators.deleteResult(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);