import React, {useCallback, useState} from 'react';
import './App.css';
import A from "./components/A";


const App = () => {
  console.log('app');
  const [counter, setCounter] = useState(0)

  const foobar = useCallback(() => {
    console.log('foobar');
    //......
    //......
    //......
    //......
    //......
    return undefined;
  }, []);

  return (
      <div>
        <A foobar={foobar}/>

        <button
            onClick={() => {
              setCounter(prevState => prevState + 1);
            }}
        >inc
        </button>

      </div>
  );
}

export default App;