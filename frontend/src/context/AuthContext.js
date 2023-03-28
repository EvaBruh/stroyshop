import { createContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null);

    const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null);

    const [loading, setLoading] = useState(true);
    const history = useNavigate();

    // Требует имя и пароль, если юзер существует и актуален-логин. Токены хранятся в локалСторе
    const loginUser = async (username, password) => {
        try {
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
        const data = await response.json();

        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            history("/");
        } else {
            // здесь можно обработать сообщение об ошибке
                return data;
        }
    } catch (err) {
        throw err;
    }
};

    // Рега юзера в БД. Валидация полей на бэке. Успех=>уходим на страницу логина.
    const registerUser = async (username, password, password2, email) => {
        try {
        const response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password2,
                email
            })
        });
        if (response.status === 201) {
            history("/login/");
        } else {
            throw await response.json();
        }
    } catch (err) {
        throw err;
    }
};

    // Выход и очистка стора
    const logoutUser = async () => {
        try {
            const authTokens = JSON.parse(localStorage.getItem('authTokens'));
            const refresh_token = authTokens.refresh;
            await axios.post('http://127.0.0.1:8000/api/logout/', { refresh_token });
        } catch (error) {
            console.log('eRRRR', error);
        }
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        history("/");
    };

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
    };

// Когда authTokens и loading state изменен,
// User state in changed( useEffect вызывает это изменение). jwt_decode просто декодирует токен доступа.
    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};