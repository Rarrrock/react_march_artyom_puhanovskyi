import React, { Component } from 'react';
import UsersComponent from './components/UsersComponent';
import PostsComponent from './components/PostsComponent';
import { IPost } from './models/IPost';
import { getPostOfUserById } from './services/api.services';

interface IState {
    selectedUserId: number | null;
    posts: IPost[];
}

class App extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedUserId: null,
            posts: [],
        };
    }

    handleUserSelect = async (id: number) => {
        const posts = await getPostOfUserById(id);
        this.setState({ selectedUserId: id, posts });
    };

    render() {
        const { posts } = this.state;
        return (
            <div>
                <UsersComponent onUserSelect={this.handleUserSelect} />
                <div>
                    <h2>Posts</h2>
                    <PostsComponent posts={posts} />
                </div>
            </div>
        );
    }
}

export default App;