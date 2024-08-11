import React from 'react';
import './App.css';
import {decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "./redux/store";

const App = () => {
  let {value} = useAppSelector(state => state.counter1SliceState);

  let dispatch = useAppDispatch();

  return (
      <div>

        <h2>{value}</h2>
        <button onClick={() => {
          dispatch(increment());
        }}>
          increment by 1
        </button>
        <button
            onClick={() => {
              dispatch(decrement());
            }}
        >
          decrement by 1
        </button>
        <button onClick={() => {
          dispatch(incrementByAmount(100));
        }}>
          increment by 100
        </button>
      </div>
  );
}

export default App;