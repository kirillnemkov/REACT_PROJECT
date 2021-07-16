import { useState } from 'react'

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState({ email: '' })
    const [messageSuccess, setMessageSuccess] = useState(false)

    return (
        <div className="modalka_wrapper">
            <h2>Введите email, который вы указывали при регистрации</h2>
            <form onSubmit={submitHandler}>
                <div className="modalka_form_wrapper">
                    <input
                        className="modalka_input"
                        placeHolder="Email"
                        value={formFields.newEmail}
                        onChange={changeHandler}
                        type="email"
                        data-id="email"
                    />
                    <button data-id="email" className="modalka_btn">
                        Подтвердить
                    </button>
                </div>
                <span>
                    {messageSuccess &&
                        'Письмо с инструкцией для обновления пароля успешно отправлено на указанный адрес'}
                </span>
            </form>
        </div>
    )
}

export default ForgotPasswordForm
