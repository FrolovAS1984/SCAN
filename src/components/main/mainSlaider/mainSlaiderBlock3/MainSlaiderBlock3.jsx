import styles from "../../../../styles/MainSlaiderBlock.module.css";
import SHIELD from "../../../../images/shield.svg";

function MainSlaiderBlock3() {

    return (
        <section className={styles.container}>
            <img className={styles.image} src={SHIELD} alt={""} />
            <p className={styles.text}>
                Защита конфеденциальных сведений,не подлежащих разглашению по федеральному законодательству
            </p>

        </section>

    )

}

export default MainSlaiderBlock3;