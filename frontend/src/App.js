import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import ProjectLink from "./components/Projects";
import Tours from "./components/Tours";
import Facades from "./components/Facades";
import BrandBook from "./components/BrandBook";
import Interior from "./components/Interior";
import Privacy from "./components/Privacy";
import Terms from "./components/TermsUse";
import Presentation from "./components/Presentation";
import Job from "./components/Job";
import './App.css';

const App = () => {

  return (
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
      <Route path="/" element={<Layout />}>
        <Route path="/project/:projectId" element={<ProjectLink />} />
        <Route index element={<HomePage />} />
        <Route path="tours" element={<Tours />} />
        <Route path="facades" element={<Facades />} />
        <Route path="brand" element={<BrandBook />} />
        <Route path="interior" element={<Interior />} />
        <Route path="presentation" element={<Presentation />} />
        <Route path="job" element={<Job />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  )
}

export default App;