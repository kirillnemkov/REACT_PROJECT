import './AuthForm-form.css'
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signIn, signUp, sendResetPasswordLetter } from '../../redux/actions/user.ac'
import Modal from '../Modal/Modal'
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm'

const AuthForm = () => {
    const [formFields, setFormFields] = useState({})

    const container = useRef()
    let history = useHistory()
    const dispatch = useDispatch()
    const error = useSelector((state) => state.error)
    const [modalActive, setModalActive] = useState(false)
    const [messageSuccess, setMessageSuccess] = useState(false)

     function submitHandler(e) {
        e.preventDefault()
        let payload = Object.entries(formFields).filter((el) =>
            el[1] ? el[1].trim() : el[1]
        )
        if (payload.length) {
            if (e.target.dataset.id === 'signup') {
                dispatch(signIn(payload, history, error))
            }
            if (e.target.dataset.id === 'newEmail') {
              dispatch(sendResetPasswordLetter(payload, error))
              setMessageSuccess(true)
            } else {
                dispatch(signUp(payload, history, error))
            }
        }
    }

    function changeHandler(e) {
      const field = e.target.dataset.id
      const newValue = e.target.value
      if(e.target.dataset.id === 'newEmail') { 
        setFormFields({ [field]: newValue })
      } else {
        setFormFields((prev) => ({ ...prev, [field]: newValue }))
      }
    }

    function toggleHandler(e) {
        if (e.target.id === 'signUp') {
            container.current.classList.add('right-panel-active')
        } else {
            container.current.classList.remove('right-panel-active')
        }
    }

    return (
        <>
            <div ref={container} className="container" id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={submitHandler}>
                        <h1>Создать аккаунт</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            value={formFields.username}
                            onChange={changeHandler}
                            data-id="username"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={formFields.email}
                            onChange={changeHandler}
                            data-id="email"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={formFields.password}
                            onChange={changeHandler}
                            data-id="password"
                        />
                        <button data-id="signup">Зарегистрироваться</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={submitHandler}>
                        <h1>Вход</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            value={formFields.email}
                            onChange={changeHandler}
                            data-id="email"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={formFields.password}
                            onChange={changeHandler}
                            data-id="password"
                        />
                        <a onClick={() => setModalActive(true)}>
                            Забыли пароль?
                        </a>
                        <button data-id="signin">Войти</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Мы соскучились!</h1>
                            <p>
                                Если у тебя уже есть аккаунт, кликни на кнопку
                                ниже!
                            </p>
                            <button
                                onClick={toggleHandler}
                                className="ghost"
                                id="signIn"
                            >
                                Войти
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Привет, прогер!</h1>
                            <p>
                                Если ты до сих пор не зарегистрировался, кликни
                                на кнопку ниже!
                            </p>
                            <button
                                onClick={toggleHandler}
                                className="ghost"
                                id="signUp"
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal setModalActive={setModalActive} modalActive={modalActive}>
              <ForgotPasswordForm />
            </Modal>
        </>
    )
}

export default AuthForm
