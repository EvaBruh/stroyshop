import React from 'react'
import { useContactForm } from '../../hooks/useContactForm'

const ContactForm = () => {
  const { name, phone, isSending, success, error, onSubmissingForm, onChangeName, onChangeSurName, onChangePhone } = useContactForm()

  return (
    <form className="main__form form" id="telegramForm" onSubmit={onSubmissingForm}>
      <div className="form__header">
        <div className="form__header-line"></div>
        <h3 className="form__title">Связаться со мной</h3>
        <div className="form__header-line"></div>
      </div>
      <div className="form__inputs">
        <input
          className="form__input"
          type="text"
          value={name}
          onChange={onChangeName}
          name="user_name"
          id="user-name-input"
          placeholder="Введите Ваше имя.."
          autoComplete="off"
          required
        />
        <input
          className="form__input"
          type="tel"
          value={phone}
          onChange={onChangePhone}
          name="user_phone"
          id="user-phone-input"
          placeholder="Введите Ваш телефон.."
          autoComplete="off"
          required
        />
      </div>

      {error && (
        <div className="form__inputs error">
          <h4>Произошла ошибка, повторите попытку позже или позвоните нам..</h4>
        </div>
      )}

      {isSending && (
        <div className="form__inputs success">
          <h4>Идет отправка...</h4>
        </div>
      )}

      {success && (
        <div className="form__inputs success">
          <h4>Ваша заявка успешно отправлена!</h4>
        </div>
      )}

      <div className="form__buttons">
        <button className="form__button form__submit" type="submit">Отправить</button>
      </div>
    </form>
  )
}

export default ContactForm