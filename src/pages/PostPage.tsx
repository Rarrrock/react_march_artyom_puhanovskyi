import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getPost } from '../services/api.services';

const PostPage = () => {
    let { id } = useParams();
    let location = useLocation();
    let state = location.state;
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPost(state.id).then(response => {
            setPost(response.data);
        });
    }, [id, state.id]);

    return (
        <div>
            PostPage {state.id} {state.title}
            <hr />
            {JSON.stringify(post, null, 2)}
        </div>
    );
};

export default PostPage;
