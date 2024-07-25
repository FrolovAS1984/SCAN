import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService.js";
// import axios from "axios";

export default class Store {
    // user = {};
    isAuth = false;
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
        this.initializeAuth()


    }
    initializeAuth() {
        const token = localStorage.getItem('token');
        if (token) {
            this.isAuth = true;
        }
    }
    ini
    setAuth(bool) {
        this.isAuth = bool;

    }


    // setUser(user) {
    //     this.user = user;
    // }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login (username, password) {
        this.setLoading(true);
        try {
            const response = await AuthService.login(username, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            // this.setUser(response.data.user);

        } catch (e){
            console.log(e.response?.data?.message)

        } finally {
            this.setLoading(false);
        }
    }
    async logout () {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            // this.setUser({});
            console.log(response)

        } catch (e){
            console.log(e.response?.data?.message)

        }
    }
//     async checkAuth() {
//         try {
//             const response = await  axios.get
//             this.setAuth(true);
//             this.setUser(response.data);
//         } catch (e) {
//             console.log(e.response?.data?.message)
//         }
//     }
//
}