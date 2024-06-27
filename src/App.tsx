import React from 'react';
import './App.css';
import MyCustomPersonComponent from "./Components/myCustomPersonComponent/MyCustomPersonComponent";

const App = () =>  {

  return (
    <div>
      <MyCustomPersonComponent nameOfClass={'Lisa'} age={10} img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}>About Lisa</MyCustomPersonComponent>
      <MyCustomPersonComponent nameOfClass={'Bart'} age={9} img={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}>About Bart</MyCustomPersonComponent>
    </div>
  );
}

export default App;
