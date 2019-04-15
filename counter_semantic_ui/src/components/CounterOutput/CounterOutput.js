import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

const counterOutput = (props) => (
  <Segment inverted color='blue'>
    <Header as='h1' icon>
      <Icon name='calculator' />
      Current Value: {props.value}
    </Header>
  </Segment>
);

export default counterOutput;