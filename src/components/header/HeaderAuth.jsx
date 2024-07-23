import styles from "./Header.module.css";
import LOGO from "/src/images/LOGO.svg";
import AVATAR from "../../images/avatar.jpg";
import {API_URL} from "../../http/http.js";
import axios from "axios";

import {Context} from "../../main.jsx";

import {useContext , useEffect , useState} from "react";


function HeaderAuth() {

    const {store} = useContext(Context);
    const [user, setUser] = useState();

    if (store.isAuth) {
        axios.get(`${API_URL}/info`).then(res=>{
            setUser(res.data)
            console.log(res.data)
        })
    }


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={LOGO} alt={""} />
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>

            <div className={styles.userinfo}>
                <div className={styles.company}>Использовано компаний</div>
                <div className={styles.limit}>Лимит по компаниям</div>

            </div>


            <div className={styles.box}>
                <div className={styles.username}>Алексей А.</div>
                <div onClick={() => store.logout()} className={styles.logout}>
                    Выйти
                </div>
            </div>
            <div className={styles.avatar} style={{backgroundImage: `url(${AVATAR})`}}></div>


        </header>
    );
}

export default HeaderAuth;