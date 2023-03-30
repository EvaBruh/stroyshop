import { Navigate} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../context/AuthContext";

// Проверяет, присутствует ли пользователь или нет. Если пользователь присутствует,
// он передаст все реквизиты дочернему компоненту, и этот маршрут будет отображен.
// В противном случае он будет перенаправлен на страницу входа.

const PrivateRoute = ({ children }) => {
    let {user} = useContext(AuthContext);
    return !user ? <Navigate to="/login"/> : children;
};
export default PrivateRoute;