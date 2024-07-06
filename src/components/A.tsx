import React, {FC, memo} from 'react';

const A: FC<any> = memo(({foobar}) => {
    console.log('A render');
    foobar();
    return (
        <div>
            hello A

        </div>
    );
});

export default A;