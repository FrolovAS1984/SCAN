import styles from "./Header.module.css";
import LOGO from "/src/images/LOGO.svg";
import AVATAR from "../../images/avatar.jpg";
import SPINNER from "../../images/spinner.svg";

import $api from "../../http/http.js";


import {Context} from "../../main.jsx";

import {useContext , useEffect , useState} from "react";
import {Link} from "react-router-dom";


function HeaderAuth() {

    const {store} = useContext(Context);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        $api.get(`/info`).then(res=>{
            setUser(res.data.eventFiltersInfo);
            console.log(res.data.eventFiltersInfo);
            setTimeout(()=>{
                setIsLoading(false);

            }, 1000);
        })

    } , [store.isAuth])



    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={LOGO} alt={""} />
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>


            <div className={styles.userinfo}>
                {isLoading ? (
                    <img className={styles.spinner} src={SPINNER} alt={""} /> ):(
                <>
                    <div className={styles.company}>Использовано компаний <span className={styles.count}> {user.usedCompanyCount}</span> </div>
                    <div className={styles.limit}>Лимит по компаниям <span className={styles.companylimit}>{user.companyLimit}</span> </div>
                </>
                    )

                }

            </div>


            <div className={styles.box}>
                <div className={styles.username}>Алексей А.</div>
                <Link to={'/'} onClick={() => store.logout()} className={styles.logout}>
                        Выйти
                </Link>
            </div>
            <div className={styles.avatar} style={{backgroundImage: `url(${AVATAR})`}}></div>


        </header>
    );
}

export default HeaderAuth;