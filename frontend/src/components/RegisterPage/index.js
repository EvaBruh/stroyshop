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
                <h1 className="register__title">Registration here</h1>
                <hr className="register__divider" />
                <div>
                    <label className="register__label" htmlFor="username">Username</label>
                    <input className="register__input" type="text" id="username" onChange={e => setUsername(e.target.value)} placeholder="Username" required />
                    {errors.username && <p>{errors.username[0]}</p>}
                </div>
                <div>
                    <label className="register__label" htmlFor="email">Email</label>
                    <input className="register__input" type="text" id="email" onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    {errors.email && <p>{errors.email[0]}</p>}
                </div>
                <div>
                    <label className="register__label" htmlFor="password">Password</label>
                    <input className="register__input" type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                     {errors.password && errors.password.map((error, index) => <p key={index}>{error}</p>)}
                </div>
                <div>
                    <label className="register__label" htmlFor="confirm-password">Confirm Password</label>
                    <input className="register__input" type="password" id="confirm-password" onChange={e => setPassword2(e.target.value)} placeholder="Confirm Password" required />
                </div>
                <button className="register_button">Register!</button>
            </form>
        </section>
    );
}

export default Register;