import styles from "./MainRequest.module.css";
import IMAGE from "/src/images/image_1.svg";

function MainRequest() {

    return (
        <section className={styles.service}>
            <div className={styles.container}>
                <div className={styles.title}>
                    сервис по поиску<br/> публикаций<br/> о компании <br/> по его ИНН
                </div>
                <div className={styles.explanation}>
                    Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                </div>
                <button className={styles.button}>Запросить данные</button>
            </div>

            <div className={styles.image}>
                <img src={IMAGE} alt={""}/>
            </div>

        </section>

    )

}

export default MainRequest;