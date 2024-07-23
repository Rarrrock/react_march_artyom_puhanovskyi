import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import PostComponent from '../components/post-component/PostComponent';
import { getPosts, getUserPosts } from '../services/api.services';
import PaginationComponent from "../components/pagination-component/PaginationComponent";
import { IPost } from "../models/IPost";

const PostsPage = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    const userId = searchParams.get('userId') ? parseInt(searchParams.get('userId')!) : null;

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const skip = (page - 1) * 30;

        if (userId) {
            getUserPosts(userId).then(response => {
                setPosts(response.data);
            }).catch(error => {
                console.error("Error fetching user posts:", error);
            });
        } else {
            getPosts(skip).then(response => {
                setPosts(response.data);
            }).catch(error => {
                console.error("Error fetching posts:", error);
            });
        }
    }, [page, userId]);

    return (
        <div>
            <hr />
            <Outlet />
            <hr />
            <PostComponent posts={posts} />
            <PaginationComponent />
        </div>
    );
};

export default PostsPage;
