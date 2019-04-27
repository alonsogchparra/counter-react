import React from 'react';
import { Container, Row, Col, Progress } from 'reactstrap'

const progressBar = (props) => (

  <Container fluid>
    <Row>
      <Col>
        <Progress
          animated
          color='info'
          value={props.progressBar}
        >
          {props.progressBar}%
        </Progress>
      </Col>
    </Row>
  </Container>

);

export default progressBar;