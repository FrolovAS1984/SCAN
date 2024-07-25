import styles from "./MainRequest.module.css";
import IMAGE from "/src/images/image_1.svg";

import {Context} from "../../main.jsx";
import {useContext} from "react";

import {Link} from "react-router-dom";

function MainRequest() {

    const {store} = useContext(Context);

    if (!store.isAuth) {
        return (
            <section className={styles.service}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        сервис по поиску<br/> публикаций<br/> о компании <br/> по его ИНН
                    </div>
                    <div className={styles.explanation}>
                        Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                    </div>
                </div>

                <div className={styles.image}>
                    <img src={IMAGE} alt={""}/>
                </div>

            </section>
        )
    }

    return (
        <section className={styles.service}>
            <div className={styles.container}>
                <div className={styles.title}>
                    сервис по поиску<br/> публикаций<br/> о компании <br/> по его ИНН
                </div>
                <div className={styles.explanation}>
                    Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                </div>
                <Link to={'/search'}>
                    <button className={styles.buttonRequest}>Запросить данные</button>
                </Link>

            </div>

            <div className={styles.image}>
                <img src={IMAGE} alt={""}/>
            </div>

        </section>

    )

}

export default MainRequest;