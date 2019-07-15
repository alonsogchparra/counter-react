import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterConsole from '../../components/CounterConsole/CounterConsole';
import CounterLoader from '../../components/CounterLoader/CounterLoader';
import CounterTheme from '../../components/CounterTheme/CounterTheme';
import * as actions from '../../store/actions';

import './Counter.css';

class Counter extends Component {

  state = {
    darkThemeActivate: false
  };

  changeThemeHandler = () => {

    return this.setState({
        darkThemeActivate: !this.state.darkThemeActivate
      });
  }

  render () {

    let checkResult = <CounterLoader isDarkTheme={this.state.darkThemeActivate} />;

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

    if (this.state.darkThemeActivate) {
      document.body.classList.add('dark');
      document.body.classList.remove('default');
    } else {
      document.body.classList.add('default');
      document.body.classList.remove('dark');
    }

    return (
      <div>

        <CounterTheme
          changedTheme={() => this.changeThemeHandler()}
          isDarkTheme={this.state.darkThemeActivate}
        />
        <CounterOutput
          value={this.props.counter}
          isDarkTheme={this.state.darkThemeActivate}
        />
        <CounterConsole
          incremented={this.props.onIncrementCounter}
          decremented={this.props.onDecrementCounter}
          added={this.props.onAddCounter}
          subtracted={this.props.onSubtractCounter}
          checkTheme={this.state.darkThemeActivate}
        />

        <div>
          <button
            className={"counter--btn_result " + (this.state.darkThemeActivate ? 'dark' : 'default')}
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