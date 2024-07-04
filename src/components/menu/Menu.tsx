import React, {memo} from 'react';

const Menu = memo(() => {
    console.log('menu 1');
    return (
        <div>
            <ul>
                <li>asd</li>
                <li>qwe</li>
                <li>zxc</li>
            </ul>
        </div>
    );
});

export default Menu;