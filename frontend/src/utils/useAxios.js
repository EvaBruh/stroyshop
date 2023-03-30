import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import {useContext} from "react";
import AuthContext from "../context/AuthContext";

// Мы обращаемся к authTokens, setUser, setAuthTokens из useContext.
// Они нужны для получения и изменения состояния приложения React.
// Cоздаем axios экземпляр с заголовками аутентификации, гарантирующими, что он будет использоваться только на Private Routes.
// Затем мы расшифровываем токен доступа пользователя. Токен имеет "exp" дату, указывающую, когда истечет срок его действия.
// В следующей строке мы просто проверяем, является ли этот токен действительным или нет.
// Если срок действия истек, получаем новый токен доступа и изменяем состояние приложения.

const baseURL = 'http://127.0.0.1:8000/api';

const useAxios = () => {
    const { authTokens, setUser, setAuthTokens} = useContext(AuthContext);

    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${authTokens?.access}` }
    });

    axiosInstance.interceptors.request.use(async req => {
        const user = jwt_decode(authTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) return req;

        const response = await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authTokens.refresh
        });

        localStorage.setItem("authTokens", JSON.stringify(response.data));

        setAuthTokens(response.data);
        setUser(jwt_decode(response.data.access));

        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req;
    });
    return axiosInstance;
};

export default useAxios;