import React, { Component } from 'react';
import { IUser } from '../models/IUser';

interface IProps {
    user: IUser;
    onUserSelect: (id: number) => void;
}

class UserComponent extends Component<IProps> {
    handleClick = () => {
        this.props.onUserSelect(this.props.user.id);
    };

    render() {
        const { user } = this.props;
        return (
            <div>
                <h3>{user.firstName} {user.username}</h3>
                <button onClick={this.handleClick}>Show Posts</button>
            </div>
        );
    }
}

export default UserComponent;