import React, {FC, useEffect, useRef, useState} from 'react';
import './App.css';

const App: FC = () =>  {

  let [x, setX] = useState<number>(0);
  let y = useRef(0);

  useEffect(() => {
    console.log('work');

    return () => {
      console.log('!!!');
    }
  },[x]);

  return (
    <div>
      <button onClick={() => {
        setX(prevState => ++prevState);
      }}>change x</button>

      <button onClick={() => {
        y.current++;
        console.log(y.current);
      }}>change y</button>
    </div>
  );
}

export default App;
