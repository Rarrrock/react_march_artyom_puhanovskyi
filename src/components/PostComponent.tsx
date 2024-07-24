import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    posts: IPost[]
}

const PostComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => (<div>{post.userId} - {post.title} </div>))
            }
        </div>
    );
};

export default PostComponent;