import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../models/IPost';

interface IProps {
    posts: IPost[];
}

const PostComponent: FC<IProps> = ({ posts }) => {
    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`} state={post}>{post.id} {post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComponent;
