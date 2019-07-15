import React from 'react';
import CounterControl from '../CounterControl/CounterControl';

import './CounterConsole.css';

const counterConsole = (props) => (
  <div className="counter_console--container">
    <CounterControl
      clicked={props.incremented}
      label="Increment"
      message="Increment 1"
      isDarkTheme={props.checkTheme}
      />
    <CounterControl
      clicked={props.decremented}
      label="Decrement"
      message="Decrement 1"
      isDarkTheme={props.checkTheme}
      />
    <CounterControl
      clicked={props.added}
      label="Add"
      message="Add 10"
      isDarkTheme={props.checkTheme}
      />
    <CounterControl
      clicked={props.subtracted}
      label="Subtract"
      message="Subtract 15"
      isDarkTheme={props.checkTheme}
      />
  </div>
);

export default counterConsole;