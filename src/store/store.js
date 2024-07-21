import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService.js";

export default class Store {
    user = {};
    isAuth = false;
    constructor() {
        makeAutoObservable(this);

    }
    setAuth(bool) {
        this.isAuth = bool;

    }

    setUser(user) {
        this.user = user;
    }

    async login (username, password) {
        try {
            const response = await AuthService.login(username, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (e){
            console.log(e.response?.data?.message)

        }
    }
    async logout () {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
            console.log(response)

        } catch (e){
            console.log(e.response?.data?.message)

        }
    }

}