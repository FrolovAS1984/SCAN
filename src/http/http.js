import axios from "axios";


export const AUTH_URL = "https://gateway.scan-interfax.ru/api/v1";
export const API_URL = "https://gateway.scan-interfax.ru/api/v1/account";

const $api = axios.create({
    // withCredentials: false,
    baseURL: API_URL,

});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});

export default $api;