import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import UserComponent from '../components/user-component/UserComponent';
import { getUsers } from '../services/api.services';
import PaginationComponent from "../components/pagination-component/PaginationComponent";
import { IUser } from "../models/IUser";

const UsersPage = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const skip = (page - 1) * 30;

        getUsers(skip).then(response => { // Изменена строка
            setUsers(response.data);
        }).catch(error => {
            console.error("Error fetching users:", error); // Изменена строка
        });
    }, [page]);

    return (
        <div>
            <hr />
            <Outlet />
            <hr />
            <UserComponent users={users} />
            <PaginationComponent />
        </div>
    );
};

export default UsersPage;
