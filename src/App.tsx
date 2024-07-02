import React, {FC,useReducer,} from 'react';
import './App.css';

const reducer = (
    state: number,
    action: {type: string, payload:number}) => {
    switch (action.type) {
        case 'add':
            return state + action.payload;
        case 'remove':
            return state + action.payload;
    }
    return state;
}

const App: FC = () =>  {
    const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
        <h2>{counter}</h2>
        <button
            onClick={() => {
                dispatch({type: 'add', payload: 10});
        }}
        >increment
        </button>
        <hr/>
        <button
            onClick={() => {
                dispatch({type: 'add', payload: -20});
            }}
        >decrement
        </button>
    </div>
  );
}

export default App;
