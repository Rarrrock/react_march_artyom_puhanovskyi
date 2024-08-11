import React from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import Incrementor from "./components/Incrementor";
import Decrementor from "./components/Decrementor";


const App = () => {

    return (
        <div>
            <MainComponent/>
            <Incrementor/>
            <Decrementor/>
        </div>
    );
}

export default App;