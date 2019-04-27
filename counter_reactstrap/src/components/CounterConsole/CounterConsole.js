import React from 'react';
import { Container, Row } from 'reactstrap';

import CounterControl from '../CounterControl/CounterControl';

const counterConsole = (props) => (

  <Container fluid>
    <Row>
      <CounterControl label='Increment' clicked={props.incremented} id='0' message='Increment 1' />
      <CounterControl label='Decrement' clicked={props.decremented} id='1' message='Decrement 1' />
      <CounterControl label='Add' clicked={props.Added} id='2' message='Add 10' />
      <CounterControl label='Subtract' clicked={props.subtracted} id='3' message='Subtract 15' />
    </Row>
  </Container>

);

export default counterConsole;