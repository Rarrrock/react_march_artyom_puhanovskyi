import React, {Component} from 'react';

type MyState = {
    user: { id: number, name: string }
}

class UserComponent extends Component<{ id: number }, MyState> {

    state: MyState = {
        user: {id: 0, name: ''}
    }

    componentDidMount() {
        console.log('mount');
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id)
            .then(value => value.json())
            .then(value => {
                this.setState({...this.state, user: value});
            });
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    componentDidUpdate(
        prevProps: Readonly<{ id: number }>,
        prevState: Readonly<any>, snapshot?: any) {
        console.log(prevProps, prevState);
    }

    render() {
        console.log('render');
        return (
            <div>

                {this.state?.user?.id}
                {this.state?.user?.name}
            </div>
        );
    }
}

export default UserComponent;