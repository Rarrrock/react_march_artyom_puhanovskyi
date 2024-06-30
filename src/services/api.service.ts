// const baseUrl = 'http://jsonplaceholder.typicode.com';
//
// const getAllUsers = async () => {
//     return await fetch(baseUrl + '/users', {headers:{'content-type': 'application/json'}}).then(res => res.json())
//         .then(value => value.json())
// }
//
// const getPostsOfUserById = async (id: number) => {
//     return await fetch(baseUrl + '/users/' + id + '/posts')
//         .then(value => value.json())
// }
//
// export {getAllUsers, getPostsOfUserById};

import axios, {AxiosResponse} from "axios";

let axiosInstance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    // headers: {
    //     'Content-Type': 'application/json',
    // }
});

axiosInstance.interceptors.request.use(request => {
    request.headers.set('Content-Type', 'application/json');
    // request.headers.set('agag', 'hjfgh');
    // request.headers.set('aaaah', 'fhyjk4');
    return request;
})

const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => {
        console.log(response);
        return response.data;
    })
}

const getPostsOfUserById = async (id:number) => {
    return await axiosInstance.get('/users/' + id + '/posts').then((response:AxiosResponse) => {
        return response.data;
    })
}

export {getAllUsers, getPostsOfUserById};