import React from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react';

const counterShowResult = (props) => (
  <Container>
    <Segment inverted>
      <Grid columns='4' centered stackable>
        {props.resultShowed}
      </Grid>
    </Segment>
  </Container>
);

export default counterShowResult;