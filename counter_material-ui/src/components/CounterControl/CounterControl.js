import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

const counterControl = (props) => {

  const classes = props;

  return (
    <Button
      color="primary"
      size="large"
      variant="text"
      className={classes.button}
      onClick={props.clicked}
    >
      {props.label}
    </Button>
  );
};

export default withStyles(styles)(counterControl);