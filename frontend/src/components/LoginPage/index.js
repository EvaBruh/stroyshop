import React from "react";
import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import RecoveryPassword from '../RecoveryPassword';
import './login.scss';


const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    const [showRecovery, setShowRecovery] = useState(false);
    const [recoveryErrors, setRecoveryErrors] = useState(null);

    // не пускаем на /login через if, если access token уже есть в хранилище
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    const access_token = authTokens ? authTokens.access : null;

    if (access_token) {
        return <Navigate to="/"/>;
    } else {

        // Вызывается в RecoveryPassword после успешной смены пароля для закрытия компонента RecoveryPassword
        const handleResetSuccess = () => {
            setShowRecovery(false);
        };

        const handleSubmit = e => {
            e.preventDefault();
            setErrors({});
            const username = e.target.username.value;
            const password = e.target.password.value;
            username.length > 0 && loginUser(username, password)
                .then(data => {
                    if (data) {
                        setErrors(data);
                    }
                });
        };


        return (
            <div className="login">
                <form className="login__form" onSubmit={handleSubmit}>
                    <h1 className="login__title">Добро пожаловать!</h1>
                    <hr className="login__divider"/>
                    <label className="login__label" htmlFor="username">Логин</label>
                    {errors.no_active_account && <p>{errors.no_active_account[0]}</p>}
                    <input className="login__input" type="text" id="username" placeholder="Введите логин"/>
                    <label className="login__label" htmlFor="password">Пароль</label>
                    <input className="login__input" type="password" id="password" placeholder="Введите пароль"/>
                    <div className="login__buttons">
                        <button className="login__button" type="submit">Войти</button>
                        <button className="login__reset-button"
                                onClick={() => setShowRecovery(!showRecovery)}>Восстановление пароля
                        </button>
                    </div>
                </form>
                <div className="login__recovery">
                    {showRecovery &&
                        <RecoveryPassword onResetSuccess={handleResetSuccess} setErrorsBack={setRecoveryErrors}/>}
                    <ul className="login__error-list">
                        {typeof recoveryErrors === 'string' && <li className="login__error-item">{recoveryErrors}</li>}
                    </ul>
                    {Array.isArray(recoveryErrors) && (
                        <ul className="login__error-list">
                            {recoveryErrors.map(error => <li className="login__error-item">{error}</li>)}
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}
export default Login;