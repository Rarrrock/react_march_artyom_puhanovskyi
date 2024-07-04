import React, {FC, memo} from 'react';

const Menu: FC<any> = memo(({links}) => {
    console.log('menu 1');
    return (
        <div>
            <ul>
                {
                    links.map((link: any) => <li>{link}</li>)
                }

            </ul>
        </div>
    );
});

export default Menu;