import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IComment} from "../models/IComment";

const CommentPage = () => {
    let {id} = useParams();
    let location = useLocation();
    let state: IComment = location.state;
    const [comment, setComment] = useState<any>();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(value => value.json())
            .then(value => {
                setComment(value);
            });
    }, [id]);

    return (
        <div>
            CommentPage {state.id} {state.name + ''}
            <hr/>

            {JSON.stringify(comment)}
        </div>
    );
};

export default CommentPage;