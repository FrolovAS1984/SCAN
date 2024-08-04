import BANNER from "../../../images/banner.svg";
import styles from "./Banner.module.css";

function Banner() {
    return (
        <section className={styles.container}>
            <img src={BANNER} alt={'Баннер'}/>
        </section>

    )
}

export default Banner;
