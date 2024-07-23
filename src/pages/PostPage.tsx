import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getPost } from '../services/api.services';

const PostPage = () => {
    let { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            getPost(parseInt(id)).then(response => {
                setPost(response.data);
            }).catch(error => {
                console.error("Error fetching post:", error);
            });
        }
    }, [id]);

    return (
        <div>
            PostPage {id}
            <hr />
            {post ? JSON.stringify(post, null, 2) : "Loading..."}
            <Link to={`/posts/${id}/comments`}>View Comments</Link>
        </div>
    );
};

export default PostPage;
