import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = (skip = 0) => {
    return axios.get(`${API_URL}/users`, {
        params: { _start: skip, _limit: 30 }
    });
};

export const getUser = (id: number) => {
    return axios.get(`${API_URL}/users/${id}`);
};

export const getUserPosts = (userId: number) => {
    return axios.get(`${API_URL}/posts`, {
        params: { userId }
    });
};

export const getPosts = (skip = 0) => {
    return axios.get(`${API_URL}/posts`, {
        params: { _start: skip, _limit: 30 }
    });
};

export const getPost = (id: number) => {
    return axios.get(`${API_URL}/posts/${id}`);
};

export const getPostComments = (postId: number) => {
    return axios.get(`${API_URL}/comments`, {
        params: { postId }
    });
};

export const getComments = (skip = 0) => {
    return axios.get(`${API_URL}/comments`, {
        params: { _start: skip, _limit: 30 }
    });
};

export const getComment = (id: number) => {
    return axios.get(`${API_URL}/comments/${id}`);
};
