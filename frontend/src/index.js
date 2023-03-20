import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {index} from "./store";
import {Provider} from "react-redux";
import './normalize.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
            <Provider store={index}>
                <BrowserRouter>
                <App />
                </ BrowserRouter>
            < /Provider>
</React.StrictMode>
);

reportWebVitals();