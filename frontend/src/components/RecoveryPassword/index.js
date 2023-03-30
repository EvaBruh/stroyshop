import React, {useEffect, useState} from 'react';
import { getCookie } from '../../utils/getCookie';
import './recoveryPassword.scss';

function PasswordRecovery({ onResetSuccess, setErrorsBack }) {

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [errors, setErrors] = useState(null);
  const [checkpoints, setCheckpoints] = useState([]);

  const csrftoken = getCookie('csrftoken');

  // идем в password_recovery
  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    // Отправка запроса на сервер для проверки существования email
    const response = await fetch('http://127.0.0.1:8000/api/password_recovery/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({ email })
    });
    const data = await response.json();

    // обработка ответов сервера
    if (data.status === 'success') {

      // Если email существует, показать поле ввода кода и поставить чекпоинт
      setErrors(data.message);
      setCheckpoints([...checkpoints, 'Email verified']);
      setShowCodeInput(true);
    } else {
      // Обработка ошибки
      setErrors(data.message);
    }
  };

  // идем в verify_code
  const handleCodeSubmit = async (event) => {
    event.preventDefault();

    // Отправка кода и email на сервер для сравнения
    const response = await fetch('http://127.0.0.1:8000/api/verify_code/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({ email, code })

    });
    const data = await response.json();

    // обработка ответов сервера
    if (data.status === 'success') {

      // Если код совпал, показать поле для ввода нового пароля и добавить чекпоинт
      setErrors(data.message);
      setCheckpoints([...checkpoints, 'Code verified']);
      setShowReset(true)
    } else {
      // Обработка ошибки
      setErrors(data.message);
    }
  };

  // идем в reset_password
  const handleResetPassword = async (e) => {
  e.preventDefault();

  // Отправка нового пароля и email для замены пароля у юзера по этому email
  try {
    const response = await fetch('/api/reset_password/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        email: email,
        new_password: newPassword,
      })
    });
    const data = await response.json();

    // Обработка ответов сервера
    if (data.status === 'success') {

      // Установка чекпоинта
      setCheckpoints([...checkpoints, 'Restore']);
      setErrors(data.message);

      // Чистим state и вырубаем форму
      setErrorsBack(null);
      onResetSuccess();
    } else {
      // Обработка ошибок валидации пароля
      setErrors(data.message);
    }
  } catch (error) {
    // Обработка неожиданных ошибок
    setErrors(error);
  }
};

    // callback в LoginPage, показ ошибок
    useEffect(() => {
    setErrorsBack(errors);
  }, [errors]);

  return (
      <div className="recovery-password">
        <div className="recovery-password__form-container">
          <form className="recovery-password__email-form" onSubmit={handleEmailSubmit}>
            <div className="recovery-password__input-container">
              <label className="recovery-password__email-label" htmlFor="email-input">Ваш e-mail</label>
              <input id="email-input" className="recovery-password__email-input" type="email" value={email}
                     onChange={(event) => setEmail(event.target.value)} required/>
            </div>
            <button className="recovery-password__email-submit" type="submit">Отправить код</button>
          </form>
        </div>
        {showCodeInput && (
            <form className="recovery-password__form-container" onSubmit={handleCodeSubmit}>
              <div className="recovery-password__input-container">
                <label className="recovery-password__code-label" htmlFor="code-input">Код верификации</label>
                <input id="code-input" className="recovery-password__code-input" type="text" value={code}
                       onChange={(event) => setCode(event.target.value)} required/>
              </div>
              <button className="recovery-password__code-submit" type="submit">Проверить код</button>
            </form>
        )}
        <div className="recovery-password__form-container">
          {showReset && (
              <form className="recovery-password__reset-form" onSubmit={handleResetPassword}>
                <div className="recovery-password__input-container">
                  <label className="recovery-password__reset-label" htmlFor="reset-input">Новый пароль</label>
                  <input id="reset-input" className="recovery-password__reset-input" type="text" value={newPassword}
                         onChange={(event) => setNewPassword(event.target.value)} required/>
                </div>
                <button className="recovery-password__reset-submit" type="submit">Установить пароль</button>
              </form>
          )}
        </div>
        <ul className="recovery-password__checkpoint-list">
          {checkpoints.map(checkpoint => <li className="recovery-password__checkpoint-item">{checkpoint}</li>)}
        </ul>
      </div>
  );
}

export default PasswordRecovery;