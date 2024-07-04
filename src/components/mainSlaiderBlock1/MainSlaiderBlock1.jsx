import styles from "../../styles/MainSlaiderBlock.module.css";
import CLOCK from "../../images/clock.svg"

function MainSlaiderBlock1() {

    return (
        <section className={styles.container}>
            <img className={styles.image} src={CLOCK} alt={""} />
            <p className={styles.text}>Высокая и оперативная скорость обработки заявки</p>
        </section>

    )

}

export default MainSlaiderBlock1;