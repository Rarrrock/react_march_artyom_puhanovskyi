import React from 'react';
import './App.css';
import Parent from "./components/Parent";
import Child from "./components/Child";
import Child2 from "./components/Child2";


const App = () => {

  return (
      <div>
        <Parent>
          <Child/>
        </Parent>

        <Parent>
          <Child2/>
        </Parent>

      </div>
  );
}

export default App;