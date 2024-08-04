import styles from "../../../../styles/MainSlaiderBlock.module.css";
import CLOCK from "../../../../images/clock.svg"

function MainSlaiderBlock4() {

    return (
        <section className={styles.container}>
            <img className={styles.image} src={CLOCK} alt={""} />
            <img className={styles.image} src={CLOCK} alt={""} />
            <img className={styles.image} src={CLOCK} alt={""} />
            <img className={styles.image} src={CLOCK} alt={""} />
            <p className={styles.text}>Очень много потрачено времени на реализацию этой гребанной карусели(((</p>
        </section>

    )

}

export default MainSlaiderBlock4;