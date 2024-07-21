import React, { useEffect, useState } from 'react';
import { IPost } from "../models/IPost";
import PostComponent from "../components/post-component/PostComponent";
import { Outlet, useSearchParams } from "react-router-dom";
import PaginationComponent from "../components/pagination-component/PaginationComponent";
import { getPosts } from "../services/api.services";

const PostsPage = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const skip = (page - 1) * 30;

        getPosts(skip).then(response => {
            setPosts(response.data);
        }).catch(error => {
            console.error("Error fetching posts:", error);
        });
    }, [page]);

    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <PostComponent posts={posts}/>
            <PaginationComponent/>
        </div>
    );
};

export default PostsPage;