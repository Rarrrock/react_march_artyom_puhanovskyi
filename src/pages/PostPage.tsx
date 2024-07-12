import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IPost} from "../models/IPost";

const PostPage = () => {
    let {id} = useParams();
    let location =useLocation();
    let state: IPost = location.state;
    const [post, setPost] = useState<any>();

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPost(value);
            });
    },[id]);

    return (
        <div>
            PostPage {state.id} {state.title + ''}
            <hr/>

            {JSON.stringify(post)}
        </div>
    );
};

export default PostPage;