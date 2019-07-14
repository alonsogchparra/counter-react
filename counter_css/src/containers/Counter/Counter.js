import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterConsole from '../../components/CounterConsole/CounterConsole';
import CounterLoader from '../../components/CounterLoader/CounterLoader';
import * as actions from '../../store/actions';

import './Counter.css';

class Counter extends Component {
  render () {

    let checkResult = <CounterLoader />;

    if (!this.props.isLoading) {
      checkResult = (
        <ul>
          {this.props.results.map(result =>
            <li key={result.id}>
              {result.value}
              <div>
                <button
                  className="counter--btn_delete"
                  onClick={() => this.props.onDeleteResult(result.id)}>
                  Delete
                </button>
              </div>
            </li>
            )}
        </ul>
      );
    }

    return (
      <div>

        <CounterOutput value={this.props.counter} />
        <CounterConsole
          incremented={this.props.onIncrementCounter}
          decremented={this.props.onDecrementCounter}
          added={this.props.onAddCounter}
          subtracted={this.props.onSubtractCounter}
        />

        <div>
          <button
            className="counter--btn_result"
            onClick={() => this.props.onStoreResult(this.props.counter)}>Show Result</button>
        </div>

        {checkResult}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results,
    isLoading: state.res.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actions.increment()),
    onDecrementCounter: () => dispatch(actions.decrement()),
    onAddCounter: () => dispatch(actions.add(10)),
    onSubtractCounter: () => dispatch(actions.subtract(15)),
    onStoreResult: (result) => dispatch(actions.storeResult(result)),
    onDeleteResult: (id) => dispatch(actions.deleteResult(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);