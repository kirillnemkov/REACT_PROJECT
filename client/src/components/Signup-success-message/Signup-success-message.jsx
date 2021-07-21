import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        marginTop: '250px',
        display: 'flex',
        justifyContent: 'center',
    },
    alertik: {
        width: '700px',
    },
}))

const SignupSuccessMessage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Alert className={classes.alertik} severity="info">
                <AlertTitle>Эй ты, посмотри на меня!</AlertTitle>
                <strong>
                    Для завершения регистрации вам необходимо подтвердить адрес
                    электронной почты. Пожалуйста, проверьте почту и перейдите
                    по ссылке для активации аккаунта.
                </strong>
            </Alert>
        </div>
    )
}

export default SignupSuccessMessage
