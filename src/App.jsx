import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Main from "./components/main/Main.jsx";
import Auth from "./components/auth/Auth.jsx";
import Search from "./components/search/Search.jsx";
import { Route, Routes } from "react-router-dom";
import HeaderAuth from "./components/header/HeaderAuth.jsx";
import { Context } from "./main.jsx";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ClipLoader } from "react-spinners";
import "./App.css";
import Result from "./components/result/Result.jsx";

function App() {
    const { store } = useContext(Context);

    if (store.isLoading) {
        return (
            <div className="loader">
                <ClipLoader
                    color={"#123abc"}
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        );
    }

    return (
        <>
            {store.isAuth ? <HeaderAuth /> : <Header />}
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/auth" element={<Auth />} />
                {store.isAuth && <Route exact path="/search" element={<Search />} />}
                {store.isAuth && <Route exact path="/result" element={<Result />} />}

            </Routes>
            <Footer />
        </>
    );
}

export default observer(App);
