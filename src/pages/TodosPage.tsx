import React, {useEffect, useState} from 'react';
import {ITodo} from "../models/ITodo";
import TodoComponent from "../component/todo-component/TodosComponent";
import {Outlet, useSearchParams} from "react-router-dom";
import PaginationComponent from "../component/pagination-component/PaginationComponent";

const TodosPage = () => {
    let [searchParams] = useSearchParams(); //null
    let page = searchParams.get('page');

    const [todos, setTodos] = useState<ITodo[]>([])


    useEffect(() => {
        let skip;
        if (page) {
            skip = +page * 30;

            fetch('https://dummyjson.com/todos?skip=' + skip)
                .then(value => value.json())
                .then(value => {
                    setTodos(value.todos);

                });
        } else {

            fetch('https://dummyjson.com/todos')
                .then(value => value.json())
                .then(value => {
                    setTodos(value.todos);

                });
        }

    }, [page]);

    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <TodoComponent todos={todos}/>
            <PaginationComponent/>
        </div>
    );
};

export default TodosPage;