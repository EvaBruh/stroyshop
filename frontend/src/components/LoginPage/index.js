import {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import './login.scss';
import {useState} from "react";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [errors, setErrors] = useState({});

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
        <section className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <h1 className="login__title">Login</h1>
                <hr className="login__divider" />
                <label className="login__label" htmlFor="username">Username</label>
                {errors.no_active_account && <p>{errors.no_active_account[0]}</p>}
                <input className="login__input" type="text" id="username" placeholder="Enter Username" />
                <label className="login__label" htmlFor="password">Password</label>

                <input className="login__input" type="password" id="password" placeholder="Enter Password" />
                <button className="login__button" type="submit">Login</button>
            </form>
        </section>
    );
};

export default Login;