import React, {FC, useEffect, useState} from 'react';

interface IProps {
    id: number;

}

const UserComponent: FC<IProps> = ({id}) => {
    console.log('user render');

    const [user, setUser] = useState<any>({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser(value);
                console.log('use effect render');
            });

    }, [id]);
    return (
        <div>
            {user.name}
        </div>
    );
};

export default UserComponent;