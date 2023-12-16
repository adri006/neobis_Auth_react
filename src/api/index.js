import axios from 'axios';

const URL = "https://neobisauthproject-production.up.railway.app/api/";

const API = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const register = async (userInfo) => {
    try {
        const res = await API.post('register', userInfo);
        if (res.status >= 200 && res.status < 300) {
            console.log(res);
            return res.data;
        } else {
            throw new Error(`Failed to register: ${res.status} - ${res.statusText}`);
        }
    } catch (error) {
        throw error;
    }
};

export const login = async (userInfo) => {
    try {
        const res = await API.post('auth', userInfo);
        if (res.status >= 200 && res.status < 300) {
            return res.data;
        } else {
            throw new Error(`Failed to login: ${res.status} - ${res.statusText}`);
        }
    } catch (error) {
        throw error;
    }
};

export const resendMessage = async (email) => {
    try {
        const res = await API.get('resendEmail', { params: { email } });
        return res.data;
    } catch (error) {
        throw error;
    }
};
