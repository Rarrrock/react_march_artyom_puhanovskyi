import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUser} from "../models/IUser";

const UserPage = () => {
    let {id} = useParams();
    let location = useLocation();
    let state: IUser = location.state;
    const [user, setUser] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser(value);
            });
    },[id]);

    return (
        <div>
            UserPage {state.id} {state.name} {state.username}
            <hr/>

            {JSON.stringify(user)}
        </div>
    );
};

export default UserPage;