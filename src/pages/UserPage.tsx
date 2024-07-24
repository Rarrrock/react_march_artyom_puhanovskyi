import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUser } from '../services/api.services';

const UserPage = () => {
    let { id } = useParams();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if (id) {
            getUser(parseInt(id)).then(response => {
                setUser(response.data);
            }).catch(error => {
                console.error("Error fetching user:", error);
            });
        }
    }, [id]);

    return (
        <div>
            UserPage {id}
            <hr />
            {user ? (
                <div>
                    {JSON.stringify(user, null, 2)}
                    <br />
                    <Link to={`/posts?userId=${user.id}`}>View Posts</Link>
                </div>
            ) : "Loading..."}
        </div>
    );
};

export default UserPage;
