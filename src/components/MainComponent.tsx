import React from 'react';
import {useStore} from "../store/store";



const MainComponent = () => {

    let {counter} = useStore();

    return (
        <div>
            counter is: {counter}
        </div>
    );
};

export default MainComponent;