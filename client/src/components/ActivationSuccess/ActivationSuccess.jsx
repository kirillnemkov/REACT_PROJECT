import { Alert } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { confirmAuth } from '../../redux/actions/user.ac'
import { useDispatch } from 'react-redux'
const { Heading } = Alert

const ActivationSuccess = () => {
    const [timer, setTimer] = useState(10)
    const dispatch = useDispatch()
    let history = useHistory()
    let { link } = useParams()

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000)
        } else {
            dispatch(confirmAuth(link))
            history.replace('/main')
        }
    }, [timer])

    function changeHandler() {
        dispatch(confirmAuth(link, history))
        history.replace('/main')
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Alert variant="success">
                <Alert.Heading>Авторизация прошла успешно!</Alert.Heading>
                <p>
                    Вы будете автоматически перенаправлены на главную страницу
                    через {timer}{' '}
                    {timer <= 1 ? 'секунду' : timer < 5 ? 'секунды' : 'секунд'}
                </p>
                <hr />
                <p className="mb-0">
                    Или можете просто кликнуть волшебную кнопку ниже, НЕ
                    ПРОМАХНИТЕСЬ!
                </p>
                <button
                    onClick={changeHandler}
                    style={{
                        minWidth: '500px',
                        minHeight: '500px',
                        marginTop: '50px',
                    }}
                >
                    СЮДА НАЖМИ, ЧЕЛ
                </button>
            </Alert>
        </div>
    )
}

export default ActivationSuccess
