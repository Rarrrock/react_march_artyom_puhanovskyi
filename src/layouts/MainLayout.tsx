import React, {useEffect} from 'react';
import MenuComponent from "../components/MenuComponent";
import {Outlet} from "react-router-dom";
import {saveUser} from "../services/api.services";

const MainLayout = () => {
    useEffect(() => {
        saveUser({id: 111, name: 'asdqwe', username: 'asdqwe@gmail.com'});
    }, []);
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;