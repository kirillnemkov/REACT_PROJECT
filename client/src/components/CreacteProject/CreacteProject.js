import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';
import { useForm } from "react-hook-form";
import IconButton from '@material-ui/core/IconButton';
import { DropzoneArea } from 'material-ui-dropzone';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../redux/actions/projects.ac';
import { Route } from 'react-router';



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
    photoButton: {
        width: '175px',
        marginBottom: '2.5%'
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
    formContainer: {
        margin: '0 auto',
        width: '80%',
    },
    IconButton: {

    },
    dropzoneClass: {
        height: '80%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& root': {
            height: '100%',
        }
    }
}));

const CreacteProject = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const [file, setFile] = useState({ files: [] })
    const onSave = (files) => {
        setFile({
            files: files
        });
    }

    const onSubmit = (data) => {
        const dataToSend = { ...data, hashtags: data.hashtags.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').split(' ') }
        dispatch(createProject(dataToSend))
        console.log(file)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer} noValidate autoComplete="off">

                <div className={styles.formContainer}>
                    <div className={styles.textUdateText}>
                        <TextField
                            type="text"
                            data-id=''
                            id="standard-basic"
                            label="Название проекта"
                            // onChange={handleSubmit(onSubmit)}
                            className={classes.TextField}
                            {...register('title')}
                        />
                        <TextField
                            id="standard-basic"
                            label="Описание"
                            // onChange={handleSubmit(onSubmit)}
                            className={classes.TextField}
                            {...register('description')}
                        />
                        <TextField
                            id="standard-basic"
                            label="Веб сайт"
                            // onChange={handleSubmit(onSubmit)}
                            {...register('website')}
                            className={classes.TextField}
                        />
                        <TextField
                            id="standard-basic"
                            label="Github"
                            // onChange={handleSubmit(onSubmit)}
                            className={classes.TextField}
                            {...register('gitHub')}
                        />
                        <TextField
                            id="standard-basic"
                            label="Twitter"
                            // onChange={handleSubmit(onSubmit)}
                            className={classes.TextField}
                            {...register('twitter')}
                        />
                        <TextField
                            {...register('facebook')}
                            id="standard-basic"
                            // onChange={handleSubmit(onSubmit)}
                            label="Facebook"
                            className={classes.TextField}
                        />
                        <TextField
                            id="standard-basic"
                            label="Дата создания"
                            // onChange={handleSubmit(onSubmit)}
                            {...register('date')}
                            className={classes.TextField}
                        />
                        <TextField
                            id="standard-basic"
                            label="Хештеги"
                            // onChange={handleSubmit(onSubmit)}
                            {...register('hashtags')}
                            className={classes.TextField}
                        />
                    </div>
                    <div className={styles.photoUpload__container}>
                        <DropzoneArea onChange={onSave} acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']} dropzoneClass={classes.dropzoneClass} />
                        <Button className={classes.photoButton} type="submit" variant="contained" color="secondary">
                            Добавить проект
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreacteProject