import React, {useMemo, useState} from 'react';
import './App.css';
import UserComponent from "./components/user-component/UserComponent";
import Menu from "./components/menu/Menu";

const App = () => {
  console.log('app render');

  const [id, setId] = useState<number>(1);

  const incrementId = () => {
    console.log('app increment');
    setId(prevState => prevState + 1);
  }

  const [link1, setLink1] = useState('asd');
  const [link2, setLink2] = useState('qwe');
  const [link3, setLink3] = useState('zxc');
  const links = useMemo(() => {
    return [link1, link2, link3];
  }, []);

  return (
      <div>
        <Menu links={links}/>
        <UserComponent id={id}/>
        <button
            onClick={incrementId}
        >inc id {id}
        </button>
      </div>
  );
}

export default App;