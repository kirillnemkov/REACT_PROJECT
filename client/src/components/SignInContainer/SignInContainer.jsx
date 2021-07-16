
const SignInContainer = ({ setSignInFormFields, setModalActive, submitHandler, changeHandler, signInFormFields }) => {

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={(e) => submitHandler(e, signInFormFields, setSignInFormFields)} data-id="signinForm">
                <h1>Вход</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={signInFormFields.email}
                    onChange={(e) => changeHandler(e, setSignInFormFields)}
                    data-id="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={signInFormFields.password}
                    onChange={(e) => changeHandler(e, setSignInFormFields)}
                    data-id="password"
                />
                <a onClick={() => setModalActive(true)}>Забыли пароль?</a>
                <button>Войти</button>
            </form>
        </div>
    )
}

export default SignInContainer
