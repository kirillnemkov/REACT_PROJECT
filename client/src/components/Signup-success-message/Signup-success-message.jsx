import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const { Heading } = Alert

const SignupSuccessMessage = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Alert variant="success">
                <Alert.Heading>
                    {' '}
                    Для завершения регистрации вам необходимо подтвердить ваш
                    email адрес. Пожалуйста проверьте почту и перейдите по
                    ссылке для активации аккаунта
                </Alert.Heading>
            </Alert>
        </div>
    )
}

export default SignupSuccessMessage
