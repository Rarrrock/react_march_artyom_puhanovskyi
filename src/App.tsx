import React, {useState} from 'react';
import './App.css';
import UserComponent from "./components/user-component/UserComponent";
// import Menu from "./components/menu/Menu";

const App = () => {

  console.log('app render');
  const [id, setId] = useState<number>(1);

  const incrementId = () => {
    console.log('app increment');
    setId(prevState => prevState + 1);
  }
  return (
      <div>
        {/*<Menu/>*/}
        <UserComponent id={id}/>
        <button
            onClick={incrementId}
        >inc id {id}
        </button>
      </div>
  );
}

export default App;