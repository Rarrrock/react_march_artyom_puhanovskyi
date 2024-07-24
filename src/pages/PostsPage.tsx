import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPostsOfUser} from "../services/api.services";
import {IPost} from "../models/IPost";
import PostComponent from "../components/PostComponent";

const PostsPage = () => {
    let {id} = useParams();
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        if (id) {
            getPostsOfUser(id).then(value => setPosts(value));

        }
    }, [id]);

    return (
        <div>
            <PostComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;