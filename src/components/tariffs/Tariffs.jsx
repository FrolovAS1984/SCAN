import styles from './Tariffs.module.css'
import TariffsBlock1 from "../tariffsBlock1/TariffsBlock1.jsx";

function Tariffs() {

    return (
        <section className={styles.container}>
            <div className={styles.text}>НАШИ ТАРИФЫ</div>
            <div className={styles.blocks}>
                <TariffsBlock1 />

            </div>


        </section>


    )
}

export default Tariffs;