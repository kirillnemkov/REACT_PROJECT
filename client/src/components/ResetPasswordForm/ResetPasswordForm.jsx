import './ResetPasswordForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { updatePassword } from '../../redux/actions/user.ac'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        marginTop: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    textField: {
        width: '300px',
    },
    button: {
        // height: '50px',
        margin: '8',
    },
}))

const ResetPasswordForm = () => {
    const [password, setPassword] = useState({ password: '' })
    const dispatch = useDispatch()
    let history = useHistory()
    let { link } = useParams()
    const error = useSelector((state) => state.error)
    const classes = useStyles()

    function changeHandler(e) {
        const field = e.target.dataset.id
        const newValue = e.target.value
        setPassword((prev) => ({ ...prev, [field]: newValue }))
    }

    function submitHandler(e) {
        e.preventDefault()
        dispatch(updatePassword(link, error, history, password))
    }

    return (
        // <div className="modalka_wrapper">
        //           <h2>Введите новый пароль</h2>
        //           <form onSubmit={submitHandler}>
        //               <div className="modalka_form_wrapper">
        //                   <input
        //                       className="modalka_input"
        //                       placeholder="Password"
        //                       value={password.password}
        //                       onChange={changeHandler}
        //                       type="password"
        //                       data-id="password"
        //                   />
        //                   <button className="modalka_btn">
        //                       Подтвердить
        //                   </button>
        //               </div>
        //           </form>
        //       </div>
        <div className={classes.root}>
            <form onSubmit={submitHandler} className={classes.root}>
                <div>
                    <TextField
                        id="searchText"
                        style={{ margin: 8 }}
                        placeholder="Введите новый пароль"
                        fullWidth
                        onChange={changeHandler}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        // value={searchText}
                        className={classes.textField}
                    />
                </div>
                <div>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                    >
                        <strong>Подтвердить</strong>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ResetPasswordForm
