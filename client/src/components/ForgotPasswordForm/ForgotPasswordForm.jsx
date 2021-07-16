import './ForgotPasswordForm.css'

const ForgotPasswordForm = ({ setForgotPasswordFormFields, forgotPasswordFormFields, submitHandler, changeHandler, message }) => {

    return (
        <div className="modalka_wrapper">
            <h2>Введите email, который вы указывали при регистрации</h2>
            <form onSubmit={(e) => submitHandler(e, forgotPasswordFormFields, setForgotPasswordFormFields)}>
                <div className="modalka_form_wrapper">
                    <input
                        className="modalka_input"
                        placeholder="Email"
                        value={forgotPasswordFormFields.email}
                        onChange={(e)=> changeHandler(e, setForgotPasswordFormFields)}
                        type="email"
                        data-id="email"
                    />
                    <button data-id="email" className="modalka_btn">
                        Подтвердить
                    </button>
                </div>
                <span>
                    {message && message}
                </span>
            </form>
        </div>
    )
}

export default ForgotPasswordForm
