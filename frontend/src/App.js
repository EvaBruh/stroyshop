import React from "react";
import {Router, Routes, Navigate, Route} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import ProductLink from "./components/Products";
//import Tours from "./components/Tours";
//mport Facades from "./components/Facades";
//import BrandBook from "./components/BrandBook";
//import Interior from "./components/Interior";
import ToolsPage from "./components/ToolsPage";
import HomeToolsPage from "./components/HomeToolsPage";
import GardenPage from "./components/GardenPage";
import DecorPage from "./components/DecorPage";
import BuildPage from "./components/BuildPage";
import Privacy from "./components/Privacy";
import Terms from "./components/TermsUse";
//import Presentation from "./components/Presentation";
//import Job from "./components/Job";
import './App.css';

import {AuthProvider} from "./context/AuthContext";
//import Login from "./components/LoginPage";
//import Register from "./components/RegisterPage";
//import PersonalPage from "./components/Cabinet";
//import PrivateRoute from "./utils/privatRoute";
import Materials from "./components/Materials/";

const App = () => {

    return (

            <AuthProvider>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <Navigate
                            to={window.location.pathname.replace(/^\/?(.*)\/?$/, "/$1")}
                            replace
                        />
                    }
                />
                <Route path="/" element={<Layout/>}>
{/*                            <Route path="/personal" element={<PrivateRoute><PersonalPage/></PrivateRoute>} exact/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="register" element={<Register/>}/>*/}
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/product/:productId" element={<ProductLink/>}/>
                            <Route path="tools" element={<ToolsPage/>}/>
                            <Route path="hometools" element={<HomeToolsPage/>}/>
                            <Route path="garden" element={<GardenPage/>}/>
                            <Route path="materials" element={<Materials/>}/>
                            <Route path="decor" element={<DecorPage/>}/>
                            <Route path="build" element={<BuildPage/>}/>
                            <Route path="privacy" element={<Privacy/>}/>
                            <Route path="terms" element={<Terms/>}/>
                </Route>
            </Routes>
            </AuthProvider>

    );
};

export default App;