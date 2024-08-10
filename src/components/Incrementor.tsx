import React from 'react';
import {useAppContext} from "../App";

const Incrementor = () => {
    let {inc} = useAppContext();

    return (
        <div>
            <button onClick={inc}>increment</button>
        </div>
    );
};

export default Incrementor;