import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => {
    return axios.get(`${API_URL}/users`);
};

export const getUser = (id: number) => {
    return axios.get(`${API_URL}/users/${id}`);
};

export const getPosts = () => {
    return axios.get(`${API_URL}/posts`);
};

export const getPost = (id: number) => {
    return axios.get(`${API_URL}/posts/${id}`);
};

export const getComments = () => {
    return axios.get(`${API_URL}/comments`);
};

export const getComment = (id: number) => {
    return axios.get(`${API_URL}/comments/${id}`);
};
