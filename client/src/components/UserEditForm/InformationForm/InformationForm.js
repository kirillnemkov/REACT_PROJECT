import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        marginTop: '15px',
        width: '140px'
    },
    TextField: {
        marginTop: '15px',
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        backgroundColor: 'white',
    },
    TextField_first: {
        marginTop: '15px',
        width: '100%',
        backgroundColor: 'white',
    },
    form: {
        width: '70%',
        margin: '0 auto'
    },
    IconButton: {

    }
}));

const InformationForm = ({ previousPageButtonHandler, nextPageButtonHandler }) => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => console.log(JSON.stringify(data))

    return (
        <><form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate autoComplete="off">
            <div className={styles.formContainer}>


                <span className={styles.formSpan}>Редактирование профиля</span>
                <TextField
                    type="text"
                    data-id='firstName'
                    id="standard-basic"
                    label="Имя"
                    className={classes.TextField}
                    {...register('firstName')}
                />
                <TextField
                    id="standard-basic"
                    label="Отчесто"
                    className={classes.TextField}
                    {...register('middleName')}
                />
                <TextField
                    id="standard-basic"
                    label="Фамилия"
                    className={classes.TextField}
                    {...register('lastName')}
                />
                <TextField
                    id="standard-basic"
                    label="О себе"
                    {...register('about')}
                    className={classes.TextField}
                />
                <TextField
                    id="standard-basic"
                    label="Город"
                    className={classes.TextField}
                    {...register('location')}
                />
                <TextField
                    {...register('job')}
                    id="standard-basic"
                    label="Работа"
                    className={classes.TextField}
                />
                <TextField
                    id="standard-basic"
                    label="Сайт"
                    {...register('url')}
                    className={classes.TextField}
                />
                <TextField
                    id="standard-basic"
                    label="GitHub"
                    {...register('gitHub')}
                    className={classes.TextField}
                />
                <TextField
                    id="standard-basic"
                    label="Twitter"
                    {...register('twitter')}
                    className={classes.TextField}
                />
                <TextField
                    id="standard-basic"
                    label="Instagram"
                    {...register('instagram')}
                    className={classes.TextField}
                />
                <TextField
                    id="standard-basic"
                    label="Facebook"
                    {...register('facebook')}
                    className={classes.TextField}
                />
                <div className={styles.button_group}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        className={classes.button}
                        endIcon={<CheckIcon />}
                    >
                        Сохранить
                    </Button>
                    <div className={styles.IconButtons}>
                        <Button onClick={previousPageButtonHandler}>
                            <IconButton className={classes.IconButton} aria-label="delete" disabled color="primary">
                                <ChevronLeftIcon />
                            </IconButton>
                        </Button>
                        <Button onClick={nextPageButtonHandler}>
                            <IconButton aria-label="delete" disabled color="primary">
                                <ChevronRightIcon />
                            </IconButton>
                        </Button>
                    </div>
                </div>

            </div>
        </form>
        </>
    )
}

export default InformationForm