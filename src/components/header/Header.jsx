import styles from "./Header.module.css";
import LOGO from "/src/images/LOGO.svg";
import {Link} from "react-router-dom";

function Header() {
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
            <div className={styles.registration}>
                <div className={styles.reg}><a href="#">Зарегистрироваться</a></div>
                <div className={styles.separator}></div>
                <Link to={"/auth"}>
                    <button className={styles.enter}>Войти</button>
                </ Link>
            </div>



        </header>
    );
}

export default Header;