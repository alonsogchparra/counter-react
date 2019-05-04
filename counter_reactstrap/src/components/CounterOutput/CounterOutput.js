import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

const counterOutput = (props) => (
  <Jumbotron fluid>
    <Container fluid>
      <h1>Current Value: {props.value}</h1>
    </Container>
  </Jumbotron>
);

export default counterOutput;