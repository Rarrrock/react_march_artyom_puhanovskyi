import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import CustomErrorLayout from './layout/CustomErrorLayout';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import CommentsPage from './pages/CommentsPage';
import CommentPage from './pages/CommentPage';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <CustomErrorLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'users', element: <UsersPage />, children: [
                    { path: ':id', element: <UserPage /> }
                ]
            },
            {
                path: 'posts', element: <PostsPage />, children: [
                    { path: ':id', element: <PostPage /> }
                ]
            },
            {
                path: 'comments', element: <CommentsPage />, children: [
                    { path: ':id', element: <CommentPage /> }
                ]
            },
        ]
    },
]);

root.render(
    <RouterProvider router={router} />
);
