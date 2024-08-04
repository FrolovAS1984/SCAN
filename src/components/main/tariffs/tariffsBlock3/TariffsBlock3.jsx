import styles from "../../../../styles/TariffsBlock.module.css";
import COMP from "../../../../images/comp.svg";
import CHECK from "../../../../images/check.svg";

function TariffsBlock3() {
    return(
        <section className={styles.container}>
            <div className={styles.head3}>
                <div className={styles.info}>
                    <div className={styles.title}>Business</div>
                    <div className={styles.subtitle}>Для корпоративных клиентов</div>
                </div>
                <img className={styles.icon3} src={COMP} alt={'компьютер'}/>

            </div>
            <div className={styles.main}>
                <div className={styles.prices}>
                    <div className={styles.price}>2 379 ₽</div>
                    <div className={styles.oldprice}>3 700 ₽</div>
                </div>
                <div className={styles.tariff3}>В тариф входит:</div>
                <div className={styles.list}>

                    <div className={styles.item}><img src={CHECK} alt={'галочка'}/>Все пункты тарифа Pro</div>
                    <div className={styles.item}><img src={CHECK} alt={'галочка'}/>Безлимитное количество запросов</div>
                    <div className={styles.item}><img src={CHECK} alt={'галочка'}/>Приоритетная поддержка</div>


                </div>


            </div>
            <button className={styles.button}>Подробнее</button>



        </section>
    )

}

export default TariffsBlock3;