import {useContext, useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
//import './cabinet.scss';
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

        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 text-center">
                <h1 className="text-5xl font-semibold leading-6 text-gray-900">Личный кабинет</h1>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">Ваш Логин</dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">{user.username}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">Ваш Email</dt>
                        <dd className="mt-1 lg text-gray-900 sm:col-span-2 sm:mt-0">{user.email}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">Подтверждение email</dt>
                        {emailConfirmed ? (
                            <p className="mt-1 text-lg text-green-500 sm:col-span-2 sm:mt-0">Email confirmed</p>
                        ) : (
                            <div className="mt-1 text-lg text-red-500 sm:col-span-2 sm:mt-0">
                                <p>Email not confirmed.</p>
                                <button
                                    onClick={handleActivateEmail}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Activate now
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">Проверка</dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">{res}</dd>
                    </div>
                   <div className="border-t border-gray-200">

                    </div>
                     </dl>
                    <dl><div className="px-4 py-5 sm:px-6 text-center">
                <h1 className="text-2xl font-semibold leading-6 text-gray-900">Сменить пароль</h1>
            </div>
            <div className="mt-10 flex flex-col flex justify-center items-center w-screen">
                <div className="sm:col-span-2 mb-20 text-center">
                    <form onSubmit={handleChangePassword} className=" space-y-5">
                        {typeof errors.response === "string" && (
                            <ul className="text-red-500 list-disc pl-4">
                                <li>{errors.response}</li>
                            </ul>
                        )}
                        {Array.isArray(errors.response) && (
                            <ul className="text-red-500 list-disc pl-4">
                                {errors.response.map((error) => (
                                    <li>{error}</li>
                                ))}
                            </ul>
                        )}
                        <label htmlFor="old-password" className="block text-lg font-medium leading-6 text-gray-900">
                            Старый пароль:
                        </label>
                        <input
                            type="password"
                            id="old-password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="border rounded w-full px-3 py-2 shadow-lg  ring-gray-300"
                        />
                        <label htmlFor="new-password" className="block text-lg font-medium leading-6 text-gray-900">
                            Новый пароль:
                        </label>
                        <input
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border rounded w-full px-3 py-2 shadow-lg  ring-gray-300"
                        />
                        <button type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Сменить пароль
                        </button>
                    </form>
                </div>
    </div></dl>




            </div>
        </div>

        /*<div className="p-4 ">
          <div className="text-2xl font-bold mb-4 ">
            <h1>Личный кабинет</h1>
          </div>
          <div className="mb-4">
            <p>{res}</p>
          </div>
          <div className="mb-4">
            <p>Email: {user.email}</p>
            {emailConfirmed ? (
              <p className="text-green-500">Email confirmed</p>
            ) : (
              <div className="text-red-500">
                <p>Email not confirmed.</p>
                <button
                   onClick={handleActivateEmail}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Activate now
                </button>
              </div>
            )}
          </div>
          <div className="mb-4">
            <p>name: {user.username}</p>
          </div>
          <form onSubmit={handleChangePassword} className="space-y-4">
            {typeof errors.response === "string" && (
              <ul className="text-red-500 list-disc pl-4">
                <li>{errors.response}</li>
              </ul>
            )}
            {Array.isArray(errors.response) && (
              <ul className="text-red-500 list-disc pl-4">
                {errors.response.map((error) => (
                  <li>{error}</li>
                ))}
              </ul>
            )}
            <label htmlFor="old-password" className="block font-bold mb-1">
              Old password:
            </label>
            <input
              type="password"
              id="old-password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="border rounded w-full px-3 py-2"
            />
            <label htmlFor="new-password" className="block font-bold mb-1">
              New password:
            </label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border rounded w-full px-3 py-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Change password
            </button>
          </form>
        </div>*/
    );
}

export default Cabinet;