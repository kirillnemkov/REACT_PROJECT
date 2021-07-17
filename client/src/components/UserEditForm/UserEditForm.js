import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


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
        width: '100%',
        backgroundColor: 'white',
    },
    TextField_first: {
        width: '100%',
        backgroundColor: 'white',
    },
    form: {
        width: '100%',
        margin: '0 auto'
    },
    IconButton: {
        marginLeft: '40px'
    }
}));

export default function UserEditForm() {
    const classes = useStyles();

    return (
        <div className='form container'>
            <form className={classes.form} noValidate autoComplete="off">
                <div className={styles.formContainer}>
                    <TextField
                        id="standard-basic"
                        label="firstName"
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-basic"
                        label="lastName"
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-basic"
                        label="middleName"
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-basic"
                        label="location"
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-basic"
                        label="job"
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-basic"
                        label="url"
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-basic"
                        label="gitHub"
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-basic"
                        label="twitter"
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-basic"
                        label="instagram"
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-basic"
                        label="facebook"
                        className={classes.TextField}
                    />
                    <div className={styles.button_group}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            endIcon={<CheckIcon />}
                        >
                            Сохранить
                        </Button>
                        <div className={styles.IconButtons}>
                            <Button>
                                <IconButton className={classes.IconButton} aria-label="delete" disabled color="primary">
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Button>
                            <Button>
                                <IconButton aria-label="delete" disabled color="primary">
                                    <ChevronRightIcon />
                                </IconButton>
                            </Button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}