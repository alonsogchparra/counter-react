import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from '../store/actions';

const Counter = () => {

  const counter = useSelector((state) => state.ctr.counter);
  const results = useSelector((state) => state.res.results);
  const isLoading = useSelector((state) => state.res.isLoading);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Current Value: {counter}</h1>
      <button onClick={() => dispatch(actions.increment())}>Increment</button>
      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
      <button onClick={() => dispatch(actions.add(10))}>Add 10</button>
      <button onClick={() => dispatch(actions.subtract(15))}>Subtract 15</button>
      <div>
        <button onClick={() => dispatch(actions.storeResult(counter))}>Show Result</button>
      </div>

      {isLoading ? (<div>Loading...</div>) : (
        <ul>
          {results.map((result) => {
            return <li key={result.id}>{result.value}
              <button onClick={() => dispatch(actions.deleteResult(result.id))}>Delete</button>
            </li>
          })}
        </ul>
      )}

    </div>
  )
}

export default Counter;