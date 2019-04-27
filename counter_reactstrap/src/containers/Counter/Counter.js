import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterConsole from '../../components/CounterConsole/CounterConsole';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import ShowResult from '../../components/ShowResult/ShowResult';
import * as actionCreator from '../../store/actions';

class Counter extends Component {

  progressBarValue = () => {
    this.props.onStoreResult(this.props.counter);
    let pbar = this.props.progressBar;
    return setInterval(() => {
      if (pbar < 100) {
        pbar++;
        console.log('pbar:', pbar);
        this.props.onUpdateProgressBar(pbar);
      }
    }, 10);
  }

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

        <div className="my-3">
          <Button
            onClick={() => this.progressBarValue()}
            color='success'
            size='lg'
          >
          Show Result
          </Button>
        </div>

        {this.props.loading ?
          <ProgressBar progressBar={this.props.progressBar} /> :
          <ShowResult
            results={this.props.results}
            deleteById={this.props.onDeleteResult}
          />
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results,
    loading: state.res.loading,
    progressBar: state.res.progressBar
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch (actionCreator.increment()),
    onDecrementCounter: () => dispatch (actionCreator.decrement()),
    onAddCounter: () => dispatch (actionCreator.add(10)),
    onSubtractCounter: () => dispatch (actionCreator.subtract(15)),
    onStoreResult: (result) => dispatch (actionCreator.storeResult(result)),
    onDeleteResult: (id) => dispatch (actionCreator.deleteResult(id)),
    onUpdateProgressBar: (pbar) => dispatch (actionCreator.updateProgressBar(pbar))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);