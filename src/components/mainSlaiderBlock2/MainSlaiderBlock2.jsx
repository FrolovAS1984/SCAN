import styles from "../../styles/MainSlaiderBlock.module.css";
import Magnifier from "../../images/magnifier.svg";

function MainSlaiderBlock2() {

    return (
        <section className={styles.container}>
            <img className={styles.image} src={Magnifier} alt={""} />
            <p className={styles.text}>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>

        </section>

    )

}

export default MainSlaiderBlock2;