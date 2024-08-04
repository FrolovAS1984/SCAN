import styles from './Tariffs.module.css'
import TariffsBlock1 from "./tariffsBlock1/TariffsBlock1.jsx";
import TariffsBlock2 from "./tariffsBlock2/TariffsBlock2.jsx";
import TariffsBlock3 from "./tariffsBlock3/TariffsBlock3.jsx";
import TariffsBlockAuth from "./tariffsBlockAuth/TariffsBlockAuth.jsx";

import {Context} from "../../../main.jsx";
import {useContext} from "react";

function Tariffs() {

    const {store} = useContext(Context);


    if (!store.isAuth) {
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

    return (
        <section className={styles.container}>
            <div className={styles.text}>НАШИ ТАРИФЫ</div>
            <div className={styles.blocks}>
                <TariffsBlockAuth/>
                <TariffsBlock2 />
                <TariffsBlock3/>
            </div>


        </section>


    )
}

export default Tariffs;