import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const counterOutput = (props) => (
  <AppBar position="static">
    <h1>Current Value: {props.value}</h1>
  </AppBar>
);

export default counterOutput;