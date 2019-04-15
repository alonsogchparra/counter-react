import React from 'react';
import { Grid } from 'semantic-ui-react';

import CounterControl from '../CounterControl/CounterControl';

const counterConsole = (props) => (
  <Grid columns='equal' stackable>
    <Grid.Column>
      <CounterControl label="Increment"  clicked={props.incremented} />
    </Grid.Column>
    <Grid.Column>
      <CounterControl label="Decrement"  clicked={props.decremented} />
    </Grid.Column>
    <Grid.Column>
      <CounterControl label="Add"  clicked={props.added} />
    </Grid.Column>
    <Grid.Column>
      <CounterControl label="Subtract"  clicked={props.subtracted} />
    </Grid.Column>
  </Grid>
);

export default counterConsole;