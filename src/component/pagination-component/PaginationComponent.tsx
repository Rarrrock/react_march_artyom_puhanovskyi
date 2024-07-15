import React from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    let [searchParams, setSearchParams] = useSearchParams({page: '0'});

    return (
        <div>

            <button onClick={() => {

            }}>prev
            </button>



            <button onClick={() => {

                let page = +(searchParams.get('page') || '1');
                let nextPage = (page + 1).toString();
                setSearchParams({page: nextPage});
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;