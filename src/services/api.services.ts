import axios from 'axios';
import { IUser } from '../models/IUser';
import { IPost } from '../models/IPost';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

const getAllUsers = async (): Promise<IUser[]> => {
    const response = await axiosInstance.get('/users');
    return response.data.users;
};

const getPostOfUserById = async (id: number): Promise<IPost[]> => {
    const response = await axiosInstance.get(`/posts/user/${id}`);
    return response.data.posts;
};

export { getAllUsers, getPostOfUserById };