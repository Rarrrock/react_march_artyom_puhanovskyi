import React, {createContext, useContext, useState} from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import Incrementor from "./components/Incrementor";
import Decrementor from "./components/Decrementor";

type StoreType = {
    counter: number;
    inc: () => void;
    dec: () => void
}

let defaultValue = {
    counter: 0,
    inc: () => {
    },
    dec: () => {
    },
};
let MyContext = createContext<StoreType>(defaultValue);

export const useAppContext = ():StoreType => useContext(MyContext);

const App = () => {

    const [globalCounter, setGlobalCounter] = useState<number>(0);
    return (
        <div>
            <MyContext.Provider value={{
                counter: globalCounter,
                inc:()=> {
                    setGlobalCounter(prevState => ++prevState);
                },
                dec:()=> {
                    setGlobalCounter(prevState => --prevState);
                }
            }}>
                <MainComponent/>
                <Incrementor/>
                <Decrementor/>
            </MyContext.Provider>

        </div>
    );
}

export default App;