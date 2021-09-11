import axiosClient from './axiosClient';

const URL = '/auth';

const Auth = {
    login: (account) => {
        return axiosClient.post(`${URL}/login`, account);
    },
    getUserInfo: () => {
        return axiosClient.get(`${URL}/user-info`);
    }
}


export default Auth;