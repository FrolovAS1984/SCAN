import $api from "../http/http.js";


export default class AuthService {
    static async login(username, password) {
        return $api.post('/login',{
            login:username,
            password:password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        } )
    }
    static async logout() {
        console.log('logout');
    }

}

