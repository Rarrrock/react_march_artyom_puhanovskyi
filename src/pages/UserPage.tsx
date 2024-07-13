import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getUser } from '../services/api.services';

const UserPage = () => {
    let { id } = useParams();
    let location = useLocation();
    let state = location.state;
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(state.id).then(response => {
            setUser(response.data);
        });
    }, [id, state.id]);

    return (
        <div>
            UserPage {state.id} {state.name}
            <hr />
            {JSON.stringify(user, null, 2)}
        </div>
    );
};

export default UserPage;
