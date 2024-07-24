import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import CommentComponent from '../components/comment-component/CommentComponent';
import { getComments, getPostComments } from '../services/api.services';
import PaginationComponent from "../components/pagination-component/PaginationComponent";
import { IComment } from "../models/IComment";

const CommentsPage = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    const postId = searchParams.get('postId') ? parseInt(searchParams.get('postId')!) : null;

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        const skip = (page - 1) * 30;

        if (postId) {
            getPostComments(postId).then(response => {
                setComments(response.data);
            }).catch(error => {
                console.error("Error fetching post comments:", error);
            });
        } else {
            getComments(skip).then(response => {
                setComments(response.data);
            }).catch(error => {
                console.error("Error fetching comments:", error);
            });
        }
    }, [page, postId]);

    return (
        <div>
            <hr />
            <Outlet />
            <hr />
            <CommentComponent comments={comments} />
            <PaginationComponent />
        </div>
    );
};

export default CommentsPage;
