
const SignUpContainer = ({ setSignUpFormFields, submitHandler, changeHandler, signUpFormFields }) => {

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={(e) => submitHandler(e, signUpFormFields, setSignUpFormFields)} data-id="signupForm">
                <h1>Создать аккаунт</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={signUpFormFields.username}
                    onChange={(e) => changeHandler(e, setSignUpFormFields)}
                    data-id="username"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={signUpFormFields.email}
                    onChange={(e) => changeHandler(e, setSignUpFormFields)}
                    data-id="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={signUpFormFields.password}
                    onChange={(e) => changeHandler(e, setSignUpFormFields)}
                    data-id="password"
                />
                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default SignUpContainer
