import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import * as actionCreators from '../../store/actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    width: '50%',
  },
  button: {
    marginTop: theme.spacing.unit * 4
  }
});

class Counter extends Component {
  render () {

    const {classes} = this.props;

    return (
      <div>
        <CounterOutput value={this.props.counter} />

        <div className={classes.root}>

          <Grid container justify="center" direction="row">

            <Paper className={classes.paper}>

              <Grid container justify="center" direction="row">

                <Grid item xs={12} md={3}>
                  <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CounterControl
                    label="Add"
                    clicked={this.props.onAddCounter}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CounterControl
                    label="Subtract"
                    clicked={this.props.onSubtractCounter}
                  />
                </Grid>

              </Grid>

            </Paper>

          </Grid>

          <div className={classes.button}>
            <Button
              onClick={() => this.props.onStoreResult(this.props.counter)}
              size="large"
              color="primary"
              variant="contained"
            >
            Show Result
            </Button>
          </div>



        </div>

        <ul>
          {this.props.results.map(result => (
            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
            ))}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Counter));