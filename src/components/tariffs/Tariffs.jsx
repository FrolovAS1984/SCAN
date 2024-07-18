import styles from './Tariffs.module.css'
import TariffsBlock1 from "../tariffsBlock1/TariffsBlock1.jsx";
import TariffsBlock2 from "../tariffsBlock2/TariffsBlock2.jsx";
import TariffsBlock3 from "../tariffsBlock3/TariffsBlock3.jsx";

function Tariffs() {

    return (
        <section className={styles.container}>
            <div className={styles.text}>НАШИ ТАРИФЫ</div>
            <div className={styles.blocks}>
                <TariffsBlock1 />
                <TariffsBlock2 />
                <TariffsBlock3/>
            </div>


        </section>


    )
}

export default Tariffs;