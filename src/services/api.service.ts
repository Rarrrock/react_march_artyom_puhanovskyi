import axios, {AxiosResponse} from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

axiosInstance.interceptors.request.use(request => {
    request.headers.set('Content-Type', 'application/json');
    return request;
});

const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => {
        console.log(response)
        return response.data.users;
    })
}

const getPostOfUserById = async (id:number) => {
    return await axiosInstance.get('/users/' + id + '/posts').then((response:AxiosResponse) => {
        return response.data;
    })
}

export {getAllUsers, getPostOfUserById};