import React from 'react';
import { useSearchParams } from "react-router-dom";

const PaginationComponent = () => {
    let [searchParams, setSearchParams] = useSearchParams({ page: '1' });

    const handlePrev = () => {
        let page = +(searchParams.get('page') || '1');
        if (page > 1) {
            setSearchParams({ page: (page - 1).toString() });
        }
    };

    const handleNext = () => {
        let page = +(searchParams.get('page') || '1');
        setSearchParams({ page: (page + 1).toString() });
    };

    return (
        <div>
            <button onClick={handlePrev}>prev</button>
            <button onClick={handleNext}>next</button>
        </div>
    );
};

export default PaginationComponent;