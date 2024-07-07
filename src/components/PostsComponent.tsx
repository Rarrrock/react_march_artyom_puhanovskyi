import React, { FC } from 'react';
import { IPost } from '../models/IPost';

interface IProps {
    posts: IPost[];
}

const PostsComponent: FC<IProps> = ({ posts }) => {
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    {post.id}: {post.title}
                </li>
            ))}
        </ul>
    );
};

export default PostsComponent;