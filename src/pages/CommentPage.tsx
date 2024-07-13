import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getComment } from '../services/api.services';

const CommentPage = () => {
    let { id } = useParams();
    let location = useLocation();
    let state = location.state;
    const [comment, setComment] = useState(null);

    useEffect(() => {
        getComment(state.id).then(response => {
            setComment(response.data);
        });
    }, [id, state.id]);

    return (
        <div>
            CommentPage {state.id} {state.name}
            <hr />
            {JSON.stringify(comment, null, 2)}
        </div>
    );
};

export default CommentPage;
