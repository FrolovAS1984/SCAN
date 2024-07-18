import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Main from "./components/main/Main.jsx";
import Auth from "./components/auth/Auth.jsx";

import {Route , Routes} from "react-router-dom";



function App() {


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

export default App
