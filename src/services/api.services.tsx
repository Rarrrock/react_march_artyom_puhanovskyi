import axios from 'axios';
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const getAllUsers = async (): Promise<IUser[]> => {
    let response = await axiosInstance.get<IUser[]>('/users');
    return response.data
}

const getPostsOfUser = async (id: string): Promise<IPost[]> => {
    let response = await axiosInstance.get<IPost[]>('/users/' + id + '/posts');
    return response.data;
}

const saveUser = async (data: IUser): Promise<void> => {
    let axiosResponse = await axiosInstance.post('/users', data);
    console.log(axiosResponse.data);

}


export {
    getAllUsers,
    getPostsOfUser,
    saveUser
}