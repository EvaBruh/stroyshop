import Navbar from "../Navbar";
import Footer from "../Footer";
import {Outlet} from "react-router-dom"
import ButtonScrollUpPage from "../ButtonScrollUpPage";
import React from "react";
import '../../normalize.css'

const Layout = () => {
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ButtonScrollUpPage />

        </>
    )
}
export default Layout;