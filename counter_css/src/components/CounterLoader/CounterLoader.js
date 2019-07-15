import React from 'react';

import './CounterLoader.css';

const counterLoader = (props) => (
  <div className={"loader " + (props.isDarkTheme ? 'dark' : 'default')}>Loading...</div>
);

export default counterLoader;