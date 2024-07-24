import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../models/IUser';

interface IProps {
    users: IUser[];
}

const UserComponent: FC<IProps> = ({ users }) => {
    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={user.id.toString()} state={user}>
                            {user.id} {user.name} ({user.username}) {/* Изменена строка */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserComponent;
