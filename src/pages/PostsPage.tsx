import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PostComponent from '../components/PostComponent';
import { getPosts } from '../services/api.services';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div>
            <hr />
            <Outlet />
            <hr />
            <PostComponent posts={posts} />
        </div>
    );
};

export default PostsPage;
