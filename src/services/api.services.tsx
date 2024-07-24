import axios, { AxiosResponse } from 'axios';
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = (skip = 0): Promise<AxiosResponse<IUser[]>> => {
    return axios.get<IUser[]>(`${API_URL}/users`, {
        params: { _start: skip, _limit: 30 }
    });
};

export const getUser = (id: number): Promise<AxiosResponse<IUser>> => {
    return axios.get<IUser>(`${API_URL}/users/${id}`);
};

export const getUserPosts = (userId: number): Promise<AxiosResponse<IPost[]>> => {
    return axios.get<IPost[]>(`${API_URL}/posts`, {
        params: { userId }
    });
};

export const getPosts = (skip = 0): Promise<AxiosResponse<IPost[]>> => {
    return axios.get<IPost[]>(`${API_URL}/posts`, {
        params: { _start: skip, _limit: 30 }
    });
};

export const getPost = (id: number): Promise<AxiosResponse<IPost>> => {
    return axios.get<IPost>(`${API_URL}/posts/${id}`);
};

export const getPostComments = (postId: number): Promise<AxiosResponse<IComment[]>> => {
    return axios.get<IComment[]>(`${API_URL}/comments`, {
        params: { postId }
    });
};

export const getComments = (skip = 0): Promise<AxiosResponse<IComment[]>> => {
    return axios.get<IComment[]>(`${API_URL}/comments`, {
        params: { _start: skip, _limit: 30 }
    });
};

export const getComment = (id: number): Promise<AxiosResponse<IComment>> => {
    return axios.get<IComment>(`${API_URL}/comments/${id}`);
};
