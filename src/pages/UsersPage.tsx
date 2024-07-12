import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {Outlet} from "react-router-dom";
import UserComponent from "../components/UserComponent";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        });
    }, []);
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <UserComponent users={users}/>
        </div>
    );
};

export default UsersPage;