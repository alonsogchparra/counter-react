import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
  <div className="counter_output">
    <h1>Current Value: {props.value}</h1>
  </div>
);

export default counterOutput;