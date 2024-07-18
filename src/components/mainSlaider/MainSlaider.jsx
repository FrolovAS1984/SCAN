

import styles from "./MainSlaider.module.css";
import ICON from "/src/images/icon.svg";

import MainSlaiderBlock1 from "../mainSlaiderBlock1/MainSlaiderBlock1.jsx";
import MainSlaiderBlock2 from "../mainSlaiderBlock2/MainSlaiderBlock2.jsx";
import MainSlaiderBlock3 from "../mainSlaiderBlock3/MainSlaiderBlock3.jsx";
import MainSlaiderBlock4 from "../mainSlaiderBlock4/MainSlaiderBlock4.jsx";
import  {useState} from "react";

function MainSlaider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const blocks = [MainSlaiderBlock1, MainSlaiderBlock2, MainSlaiderBlock3, MainSlaiderBlock4];


    const nextSlide = () => {
        setCurrentIndex(nextIndex => nextIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => prevIndex - 1);
    };


    return (
        <section className={styles.slaider}>
            <div className={styles.info}>Почему именно мы</div>
            <div className={styles.container}>
                <button className={styles.iconleft} onClick={prevSlide}>
                    <img src={ICON} alt={""}/>
                </button>
                <div className={styles.blocks}>
                    {[currentIndex, currentIndex+1, currentIndex+2].map((index) => (
                        <div key={index}>
                            {blocks[(index + blocks.length) % blocks.length]()}
                        </div>
                    ))}
                </div>
                <button className={styles.iconright} onClick={nextSlide}>
                    <img src={ICON} alt={""}/>
                </button>

            </div>
        </section>
    );
}

export default MainSlaider;