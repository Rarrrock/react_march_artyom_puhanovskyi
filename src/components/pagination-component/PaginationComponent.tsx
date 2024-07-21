import React from 'react';
import { useSearchParams } from "react-router-dom";

const PaginationComponent = () => {
    let [searchParams, setSearchParams] = useSearchParams({ page: '1' });

    const handlePrevious = () => {
        let page = +(searchParams.get('page') || '1');
        let prevPage = Math.max(page - 1, 1).toString();
        setSearchParams({ page: prevPage });
    };

    const handleNext = () => {
        let page = +(searchParams.get('page') || '1');
        let nextPage = (page + 1).toString();
        setSearchParams({ page: nextPage });
    };

    return (
        <div>
            <button onClick={handlePrevious}>prev</button>
            <button onClick={handleNext}>next</button>
        </div>
    );
};

export default PaginationComponent;
