import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getComment } from '../services/api.services';

const CommentPage = () => {
    let { id } = useParams();
    const [comment, setComment] = useState(null);

    useEffect(() => {
        if (id) {
            getComment(parseInt(id)).then(response => {
                setComment(response.data);
            }).catch(error => {
                console.error("Error fetching post:", error);
            });
        }
    }, [id]);

    return (
        <div>
            CommentPage {id}
            <hr />
            {comment ? JSON.stringify(comment, null, 2) : "Loading..."}
        </div>
    );
};

export default CommentPage;
