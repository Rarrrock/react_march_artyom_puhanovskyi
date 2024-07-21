import React, { useEffect, useState } from 'react';
import {Outlet, useSearchParams} from 'react-router-dom';
import CommentComponent from '../components/comment-component/CommentComponent';
import {getComments, getPosts} from '../services/api.services';
import PaginationComponent from "../components/pagination-component/PaginationComponent";
import {IComment} from "../models/IComment";

const CommentsPage = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || '1'; // Default to '1' if no page parameter

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        const skip = (parseInt(page) - 1) * 30; // Correctly calculate skip value

        getPosts(skip).then(response => {
            setComments(response.data);
        }).catch(error => {
            console.error("Error fetching posts:", error);
        });
    }, [page]);

    return (
        <div>
            <hr />
            <Outlet />
            <hr />
            <CommentComponent comments={comments} />
            <PaginationComponent/>
        </div>
    );
};

export default CommentsPage;
