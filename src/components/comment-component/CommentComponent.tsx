import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IComment} from "../../models/IComment";

interface IProps {
    comments: IComment[];
}
const CommentComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                <ul>
                    {
                        comments.map(comment => (
                            <li key={comment.id}>
                                <Link to={comment.id.toString()} state={comment}>{comment.id} {comment.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    );
};

export default CommentComponent;