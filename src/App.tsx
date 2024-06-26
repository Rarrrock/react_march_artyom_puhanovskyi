import React, {FC} from 'react';
import './App.css';
import MyCustomButtonComponent from "./components/myCustomButtonComponents/MyCustomButtonComponent";



const App: FC = () =>  {

  return (
    <>
      <MyCustomButtonComponent label={'first btn'} nameOfClass={'btn'}> dfhdh</MyCustomButtonComponent>
      <MyCustomButtonComponent label={'second btn'} nameOfClass={'btn'}>jcne</MyCustomButtonComponent>
    </>
  );
}

export default App;
