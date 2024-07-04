import styles from "./MainSlaider.module.css";
import ICON from "/src/images/icon.svg";
import MainSlaiderBlock1 from "../mainSlaiderBlock1/MainSlaiderBlock1.jsx";
import MainSlaiderBlock2 from "../mainSlaiderBlock2/MainSlaiderBlock2.jsx";
import MainSlaiderBlock3 from "../mainSlaiderBlock3/MainSlaiderBlock3.jsx";

function MainSlaider() {

    return (

        <section className={styles.slaider}>
            <div className={styles.info}>Почему именно мы</div>
            <div className={styles.container}>
                <img className={styles.iconleft} src={ICON} alt={""}/>
                <div className={styles.blocks}>
                    <MainSlaiderBlock1 />
                    <MainSlaiderBlock2 />
                    <MainSlaiderBlock3 />
                </div>


                <img className={styles.iconright} src={ICON} alt={""}/>

            </div>

        </section>

        )


}

export default MainSlaider;