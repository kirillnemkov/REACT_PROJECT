import './ResetPasswordForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams, useHistory} from 'react-router-dom'
import {updatePassword} from '../../redux/actions/user.ac'

const ResetPasswordForm = () => {
  const [password, setPassword] = useState({password: ''})
  const dispatch = useDispatch()
  let history = useHistory()
  let { link } = useParams()
  const error = useSelector((state) => state.error)

  function changeHandler(e) {
    const field = e.target.dataset.id
    const newValue = e.target.value
    setPassword((prev) => ({ ...prev, [field]: newValue }))
  }

  function submitHandler(e) {
    e.preventDefault()
    dispatch(updatePassword(link, error, history, password))
  }

return(
  <div className="modalka_wrapper">
            <h2>Введите новый пароль</h2>
            <form onSubmit={submitHandler}>
                <div className="modalka_form_wrapper">
                    <input
                        className="modalka_input"
                        placeholder="Password"
                        value={password.password}
                        onChange={changeHandler}
                        type="password"
                        data-id="password"
                    />
                    <button className="modalka_btn">
                        Подтвердить
                    </button>
                </div>
            </form>
        </div>
)
}

export default ResetPasswordForm 
