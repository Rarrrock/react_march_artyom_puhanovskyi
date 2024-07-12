import React, {useEffect, useState} from 'react';
import {IPost} from "../models/IPost";
import {Outlet} from "react-router-dom";
import PostComponent from "../components/PostComponent";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(value => value.json())
        .then(value => {
            setPosts(value);
        });
    }, []);
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <PostComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;