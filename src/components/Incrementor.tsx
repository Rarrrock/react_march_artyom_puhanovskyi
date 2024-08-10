import React from 'react';
import {useStore} from "../store/store";


const Incrementor = () => {
    let {inc} = useStore();

    return (
        <div>
            <button onClick={inc}>increment</button>
        </div>
    );
};

export default Incrementor;