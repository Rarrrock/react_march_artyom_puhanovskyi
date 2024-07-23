import React, { FC } from 'react';
import { IComment } from '../../models/IComment';

interface IProps {
    comments: IComment[];
}

const CommentComponent: FC<IProps> = ({ comments }) => {
    return (
        <div>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <div>{comment.name}</div>
                        <div>{comment.body}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentComponent;
