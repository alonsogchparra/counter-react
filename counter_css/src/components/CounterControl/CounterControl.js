import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
  <div className="counter_control--content">
    <button className="counter_control--btn" onClick={props.clicked}>
      <span className="counter_control--tooltip">{props.message}</span>
      {props.label}
    </button>
  </div>
);

export default counterControl;