import React, { Component } from 'react';
import { IUser } from '../models/IUser';
import UserComponent from './UserComponent';
import { getAllUsers } from '../services/api.services';

interface IProps {
    onUserSelect: (id: number) => void;
}

interface IState {
    users: IUser[];
}

class UsersComponent extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            users: [],
        };
    }

    async componentDidMount() {
        const users = await getAllUsers();
        this.setState({ users });
    }

    render() {
        const { onUserSelect } = this.props;
        const { users } = this.state;
        return (
            <div>
                <h2>Users</h2>
                {users.map(user => (
                    <UserComponent key={user.id} user={user} onUserSelect={onUserSelect} />
                ))}
            </div>
        );
    }
}

export default UsersComponent;


