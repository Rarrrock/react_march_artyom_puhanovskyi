import React, {useState, useEffect} from 'react';
import {IComment} from "../models/IComment";
import {Outlet} from "react-router-dom";
import CommentComponent from "../components/CommentComponent";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    }, []);

    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <CommentComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;