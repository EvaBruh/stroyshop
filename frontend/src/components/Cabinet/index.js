import {useContext, useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
import './cabinet.scss';
import AuthContext from "../../context/AuthContext";

function Cabinet() {
    const { user } = useContext(AuthContext);
    const [res, setRes] = useState("");
    const [emailConfirmed, setEmailConfirmed] = useState("");
    const api = useAxios();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [errors, setErrors] = useState({});
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    const access_token = authTokens.access;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/test/");
                setRes(response.data.response);
                setEmailConfirmed(response.data.email_confirmed);
            } catch {
                setRes("Something wrong!");
            }
        };
        fetchData();
    }, []);

    // Смена пароля в кабинете
    const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/change_password/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`
            },
            body: JSON.stringify({
                old_password: oldPassword,
                new_password: newPassword,
            })
        });
        const data = await response.json();

        if (!response.ok) {
            // Обработка ошибок с сервера
            setErrors(data);
        } else {
            setErrors(data);
        }
    } catch (err) {
    if (err.response) {
        const data = await err.response.json();
        console.log(data)
        setErrors(data);
    } else {
        // Обработка других ошибок
    }
}
};

    // Отправить запрос на активацию email из ЛК
    const handleActivateEmail = async () => {
        try {
            await api.post("/activate_mail/", { email: user.email });
            alert("success");
        } catch (error) {
            alert(error);
        }
    };


    return (
        <div className="personal-page">
            <div className="personal-page__title">
                <h1>Личный кабинет</h1>
            </div>
            <div className="personal-page__content">
                <p>{res}</p>
            </div>
            <div className="personal-page__content">
                <p>Email: {user.email}</p>
                {emailConfirmed ? (
                    <p className="email-status email-status--confirmed">Email confirmed</p>
                ) : (
                    <div className="email-status email-status--not-confirmed">
                        <p>Email not confirmed.</p>
                        <button onClick={handleActivateEmail} className="email-activation-link">Activate now</button>
                    </div>
                )}
            </div>
            <div className="personal-page__content">
                <p>name: {user.username}</p>
            </div>
            <form onSubmit={handleChangePassword} className="change-password-form">
                {typeof errors.response === "string" && (
                    <ul className="form-errors">
                        <li>{errors.response}</li>
                    </ul>
                )}
                {Array.isArray(errors.response) && (
                    <ul className="form-errors">
                        {errors.response.map((error) => (
                            <li>{error}</li>
                        ))}
                    </ul>
                )}
                <label htmlFor="old-password">Old password:</label>
                <input
                    type="password"
                    id="old-password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <label htmlFor="new-password">New password:</label>
                <input
                    type="password"
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type="submit">Change password</button>
            </form>
        </div>
    );
}

export default Cabinet;