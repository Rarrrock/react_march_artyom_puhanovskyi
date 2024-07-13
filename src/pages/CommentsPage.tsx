import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CommentComponent from '../components/CommentComponent';
import { getComments } from '../services/api.services';

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(response => {
            setComments(response.data);
        });
    }, []);

    return (
        <div>
            <hr />
            <Outlet />
            <hr />
            <CommentComponent comments={comments} />
        </div>
    );
};

export default CommentsPage;
