import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterConsole from '../../components/CounterConsole/CounterConsole';
import * as actionCreator from '../../store/actions';

class Counter extends Component {
  render () {
    return (
      <div>

        <CounterOutput value={this.props.counter} />

        <CounterConsole
          incremented={this.props.onIncrementCounter}
          decremented={this.props.onDecrementCounter}
          added={this.props.onAddCounter}
          subtracted={this.props.onSubtractCounter}
        />

        <div className="my-2">
          <Button
            onClick={() => this.props.onStoreResult(this.props.counter)}
            color='success'
            size='lg'
          >
          Show Result
          </Button>
        </div>

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
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch (actionCreator.increment()),
    onDecrementCounter: () => dispatch (actionCreator.decrement()),
    onAddCounter: () => dispatch (actionCreator.add(10)),
    onSubtractCounter: () => dispatch (actionCreator.subtract(15)),
    onStoreResult: (result) => dispatch (actionCreator.storeResult(result)),
    onDeleteResult: (id) => dispatch (actionCreator.deleteResult(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);