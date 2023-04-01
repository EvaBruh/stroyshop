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
    const people = [
      { name: 'Wade Cooper' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ]

    return (

        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Applicant Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.username}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Application for</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt
                            culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum
                            aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
                            nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                        <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#"
                                           className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                        <span
                                            className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#"
                                           className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
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