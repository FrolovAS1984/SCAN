import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Main from "./components/main/Main.jsx";
import Auth from "./components/auth/Auth.jsx";

import {Route , Routes} from "react-router-dom";
import HeaderAuth from "./components/header/HeaderAuth.jsx";
import {Context} from "./main.jsx";
import {useContext} from "react";
import {observer} from "mobx-react-lite";


function App() {


    const {store} = useContext(Context);

    if (!store.isAuth) {
        return (
            <>
                <Header/>
                    <Routes>
                        <Route exact path={"/"} element={<Main/>} />
                        <Route exact path={"/auth"} element={<Auth />} />
                    </Routes>
                <Footer/>

            </>

        )
    }


    return (

        <>
            <HeaderAuth/>
            <Main/>
            <Footer/>

        </>
    )
}

export default observer(App);
