import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import './register.scss';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const {registerUser} = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors({});
        registerUser(username, password, password2, email)
        .catch(err => setErrors(err));
    };

    return (
        <section className="register">
            <form className="register__form" onSubmit={handleSubmit}>
                <h1 className="register__title">Регистрация</h1>
                <hr className="register__divider"/>
                <div className="register__field">
                    <p className="register__label" htmlFor="username">Логин</p>
                    <input className="register__input" type="text" id="username"
                           onChange={e => setUsername(e.target.value)} placeholder="Введите Логин" required/>
                    {errors.username && <p className="register__error" >{errors.username[0]}</p>}
                </div>
                <div className="register__field">
                    <p className="register__label" htmlFor="email">Ваш e-mail</p>
                    <input className="register__input" type="text" id="email" onChange={e => setEmail(e.target.value)}
                           placeholder="Введите e-mail" required/>
                    {errors.email && <p className="register__error" >{errors.email[0]}</p>}
                </div>
                <div className="register__field">
                    <p className="register__label" htmlFor="password">Пароль</p>
                    <input className="register__input" type="password" id="password"
                           onChange={e => setPassword(e.target.value)} placeholder="Введите пароль" required/>
                    {errors.password && errors.password.map((error, index) => <p className="register__error" key={index}>{error}</p>)}
                </div>
                <div className="register__field">
                    <p className="register__label" htmlFor="confirm-password">Подтвердите пароль</p>
                    <input className="register__input" type="password" id="confirm-password"
                           onChange={e => setPassword2(e.target.value)} placeholder="Подтвердите пароль" required/>
                </div>
                <button className="register__button">Регистрация</button>
            </form>
        </section>
    );
}

export default Register;