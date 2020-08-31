import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from '../store/actions';

const Counter = () => {

  const counter = useSelector((state) => state.ctr.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Current Value: {counter}</h1>
      <button onClick={() => dispatch(actions.increment())}>Increment</button>
      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
      <button onClick={() => dispatch(actions.add(10))}>Add 10</button>
      <button onClick={() => dispatch(actions.subtract(15))}>Subtract 15</button>
    </div>
  )
}

export default Counter;