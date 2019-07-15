import React from 'react';

import './CounterTheme.css';

const counterTheme = (props) => (
  <div className={"counter_theme--container " + (props.isDarkTheme ? 'dark' : 'default')}>
    <button
      className="counter_theme--btn"
      onClick={props.changedTheme}>
      Change Theme
    </button>
  </div>
);

export default counterTheme;