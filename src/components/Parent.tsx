import React, {FC} from 'react';

const Parent: FC<any> = ({children}) => {
    console.log('Parent actions',);
    return (
        <div>
            {children}
        </div>
    );
};

export default Parent;