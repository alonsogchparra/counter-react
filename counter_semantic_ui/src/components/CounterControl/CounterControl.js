import React from 'react';
import { Button } from 'semantic-ui-react';

const counterControl = (props) => (
  <Button
    basic
    inverted
    onClick={props.clicked}
  >
    {props.label}
  </Button>
);

export default counterControl;