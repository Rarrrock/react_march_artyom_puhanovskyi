import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserComponent from '../components/UserComponent';
import { getUsers } from '../services/api.services';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data);
        });
    }, []);

    return (
        <div>
            <hr />
            <Outlet />
            <hr />
            <UserComponent users={users} />
        </div>
    );
};

export default UsersPage;
