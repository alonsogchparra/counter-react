import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Button, Grid, Card, Container, Segment, Icon } from 'semantic-ui-react';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterConsole from '../../components/CounterConsole/CounterConsole';
import CounterShowResult from '../../components/CounterShowResult/CounterShowResult';
import * as actionCreators from '../../store/actions';


class Counter extends Component {
  render () {

    let showResult = (
      this.props.results.map(result => (
        <Grid.Column key={result.id}>
          <Card
            fluid
            onClick={() => this.props.onDeleteResult(result.id)}
          >
            <Card.Content>
              <Card.Header textAlign='center'>{result.value}</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))
    );

    if (this.props.loading) {
      showResult = (
        <Container>
          <Segment inverted padded='very'>
            <Grid textAlign='center'>
              <Icon.Group size='large'>
                <Icon loading size='huge' name='circle notch' />
                <Icon name='calculator' />
              </Icon.Group>
            </Grid>
          </Segment>
        </Container>
      );
    }

    return (
      <div>
        <CounterOutput value={this.props.counter} />

        <Divider />

        <CounterConsole
          incremented={this.props.onIncrementCounter}
          decremented={this.props.onDecrementCounter}
          added={this.props.onAddCounter}
          subtracted={this.props.onSubtractCounter}
        />

        <Divider />

        <Button
          inverted
          color='blue'
          onClick={() => this.props.onStoreResult(this.props.counter)}
        >
        Show Result
        </Button>

        <CounterShowResult resultShowed={showResult} />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results,
    loading: state.res.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch (actionCreators.increment()),
    onDecrementCounter: () => dispatch (actionCreators.decrement()),
    onAddCounter: () => dispatch (actionCreators.add(10)),
    onSubtractCounter: () => dispatch (actionCreators.subtract(15)),
    onStoreResult: (result) => dispatch (actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch (actionCreators.deleteResult(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);