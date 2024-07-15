import React, {useEffect, useState} from 'react';
import {Location, useLocation, useParams} from "react-router-dom";
import {ITodo} from "../models/ITodo";
import {useAppLocation} from "../hooks/useAppLocation";

const TodoPage = () => {
    let {id} = useParams();
    let location: Location<ITodo> = useLocation();
    // let location = useAppLocation<ITodo>();
    let state = location.state;

    const [user, setUser] = useState<any>();
    useEffect(() => {
        fetch('https://dummyjson.com/users/' + state.userId)
            .then(value => value.json())
            .then(value => {
                setUser(value);
            });

    }, [id]);

    return (
        <div>
            TodoPage {state.id} {state.completed + ''}
            <hr/>


            {JSON.stringify(user)}
        </div>
    );
};

export default TodoPage;