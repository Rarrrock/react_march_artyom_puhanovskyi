import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";

interface IProps {
    users: IUser[];
}
const UserComponent: FC<IProps> = ({users}) => {
    return (
        <div>
            {
                <ul>
                    {
                        users.map(user => (
                        <li key={user.id}>
                            <Link to={user.id.toString()} state={user}>{user.id} {user.name}</Link>
                        </li>
                    ))
                }
                </ul>
            }
        </div>
    );
};

export default UserComponent;