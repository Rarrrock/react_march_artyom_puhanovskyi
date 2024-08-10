import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {PaginatedPageModel} from "../models/PaginatedPageModel";

interface IProps {
    next: null | PaginatedPageModel;
    prev: null | PaginatedPageModel;
}

const PaginationComponent: FC<IProps> = ({next, prev}) => {

    let [query, setQuery] = useSearchParams({page: '1'});

    const changePage = (nextOrPrev: string) => {
        let currentPage = Number(query.get('page')) || 1;
        switch (nextOrPrev) {
            case 'next':
                if (next) setQuery({page: String(currentPage + 1)});
                break;
            case 'prev':
                if (prev) setQuery({page: String(currentPage - 1)});
                break;
        }
    }

    return (
        <div>
            <button
                disabled={!prev}
                onClick={() => changePage('prev')}
            >
                Prev
            </button>

            <button
                disabled={!next}
                onClick={() => changePage('next')}
            >
                Next
            </button>
        </div>
    );
};

export default PaginationComponent;
