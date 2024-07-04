import LOGO from "/src/images/LOGO2.svg";
import styles from "../footer/Footer.module.css";

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={LOGO} alt={""} />
            </div>
            <div className={styles.info}>
                <div className={styles.address}>
                    <p>г. Москва, Цветной б-р, 40</p>
                    <p>+7 495 771 21 11</p>
                    <p>info@skan.ru</p>
                </div>
                <div className={styles.copyright}>Copyright. 2022</div>

            </div>
        </footer>
    )
}


export default Footer;