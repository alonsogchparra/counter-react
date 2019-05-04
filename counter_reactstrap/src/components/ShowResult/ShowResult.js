import React from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

import './ShowResult.css';

const showResult = (props) => (

  <Container fluid>
    <Row>
      {props.results.map(result => (
        <Col
          xs='12'
          sm='3'
          key={result.id}
          className="my-2 mx-auto"
        >
          <Card
            onClick={() => props.deleteById(result.id)}
            className='cardClick'
          >
            <CardBody>
              <CardTitle>{result.value}</CardTitle>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>

);

export default showResult;