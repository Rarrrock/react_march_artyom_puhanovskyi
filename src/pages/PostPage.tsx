import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../services/api.services';

const PostPage = () => {
    let { id } = useParams();
    const [post, setPost] = useState<any>(null);

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
            {post ? (
                <div>
                    {JSON.stringify(post, null, 2)}
                    <br />
                    <Link to={`/comments?postId=${post.id}`}>View Comments</Link>
                </div>
            ) : "Loading..."}
        </div>
    );
};

export default PostPage;
