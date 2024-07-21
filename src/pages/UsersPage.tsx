import React, { useEffect, useState } from 'react';
import {Outlet, useSearchParams} from 'react-router-dom';
import UserComponent from '../components/user-component/UserComponent';
import {getPosts, getUsers} from '../services/api.services';
import PaginationComponent from "../components/pagination-component/PaginationComponent";
import {IUser} from "../models/IUser";

const UsersPage = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || '1'; // Default to '1' if no page parameter

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const skip = (parseInt(page) - 1) * 30; // Correctly calculate skip value

        getPosts(skip).then(response => {
            setUsers(response.data);
        }).catch(error => {
            console.error("Error fetching posts:", error);
        });
    }, [page]);

    return (
        <div>
            <hr />
            <Outlet />
            <hr />
            <UserComponent users={users} />
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;
