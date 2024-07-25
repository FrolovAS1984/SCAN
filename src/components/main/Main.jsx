import MainRequest from "../mainRequest/MainRequest.jsx";
import MainSlaider from "../mainSlaider/MainSlaider.jsx";
import Banner from "../banner/Banner.jsx";
import Tariffs from "../tariffs/Tariffs.jsx";



function Main() {
    return (
        <main>
            <MainRequest />
            <MainSlaider/>
            <Banner />
            <Tariffs />
        </main>
    )
}

export default Main;