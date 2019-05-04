import React, { Component } from 'react';
import { Button, Col, Tooltip } from 'reactstrap';

class CounterControl extends Component {

  state = {
    isToolTipOpen: false
  };

  toggle = () => {
    this.setState({
      isToolTipOpen: !this.state.isToolTipOpen
    })
  };

  render () {
    return (
      <Col xs='12' sm='3' className='my-2'>

        <Button
          color='primary'
          size='lg'
          onClick={this.props.clicked}
          id={'Tooltip-' + this.props.id}
          block
        >
          {this.props.label}
        </Button>

        <Tooltip
          placement='bottom'
          isOpen={this.state.isToolTipOpen}
          target={'Tooltip-' + this.props.id}
          toggle={this.toggle}
        >
        {this.props.message}
        </Tooltip>

      </Col>
    )
  }
}

export default CounterControl