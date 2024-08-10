import axios from 'axios';
import {UserModel} from "../models/UserModel";
import {UserResponse} from "../models/UserResponseModel";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefresh} from "../models/TokenRefresh";
import {retriveLocalStorageData} from "../helpers/helpers";
import {CarPaginatedModel} from "../models/CarPaginatedModel";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

axiosInstance.interceptors.request.use(requestObject => {

    if (localStorage.getItem('tokenPair') && (requestObject.url !== '/auth' && requestObject.url !== '/auth/refresh')) {
        // if (localStorage.getItem('tokenPair') && !requestObject.url.includes('/auth')) {
        requestObject.headers.set('Authorization', 'Bearer ' + retriveLocalStorageData<TokenRefresh>('tokenPair').access);

    }

    return requestObject;
})

const userService = {
    saveUser: async (data: UserModel): Promise<boolean> => {
        let response = await axiosInstance.post<UserResponse>('/users', data);
        return !!response.data.id || false;
    }
}

const authService = {
    authenticate: async (data: TokenObtainPairModel): Promise<void> => {
        const response = await axiosInstance.post<TokenRefresh>('/auth', data);
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    },
    refresh: async (): Promise<void> => {

        const refreshToken = retriveLocalStorageData<TokenRefresh>('tokenPair').refresh;
        const response = await axiosInstance.post<TokenRefresh>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
}

const carService = {
    getCars: async (page: string = '1'): Promise<CarPaginatedModel> => {
        const response = await axiosInstance.get<CarPaginatedModel>('/cars', {params: {page: page}});
        return response.data;


    }
}

export {
    userService,
    authService,
    carService
}