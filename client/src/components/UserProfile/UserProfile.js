import styles from './userProfile.module.css'
import { Paper, Tabs, Tab } from '@material-ui/core/'
import { makeStyles} from '@material-ui/core/styles'
import Diagram from '../Daigram/Diagram'
import SocialLinks from '../SocialLinks/SocialLinks'
import About from '../About/About'
import UserMainInfo from '../UserMainInfo/UserMainInfo'
import UserProjects from '../UserProjects/UserProjects'
import UserEditForm from '../UserEditForm/UserEditForm'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { checkAuth } from '../../redux/actions/user.ac'

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '8px',
        '& .MuiButton-label': {
            justifyContent: 'end',
        },
    },
    root: {
        marginTop: '5%',
        marginBottom: '3%',
        boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 3px 0px -2px rgb(0 0 0 / 12%)',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

const UserProfile = () => {
    const classes = useStyles()
    const [tabValue, setTabValue] = useState('about')
    const [modal, setModal] = useState(false)
    const errors = useSelector((state) => state.errors)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkAuth(history, errors))
    }, [])

    function handleChange(e, value) {
        setTabValue(value)
    }

    const handleOpen = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    return (
        <div className={styles.userProfile_container}>
            <UserMainInfo handleOpen={handleOpen} modal={modal} />
            <Paper className={classes.root}>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    value={tabValue}
                    onChange={handleChange}
                >
                    <Tab label="О себе" value="about" />
                    <Tab label="Проекты" value="projects" />
                    <Tab label="Скиллы" value="skills" />
                    <Tab label="Контакты" value="contacts" />
                </Tabs>
            </Paper>

            {tabValue === 'about' ? <About /> : null}
            {tabValue === 'projects' ? <UserProjects /> : null}
            {tabValue === 'skills' ? <Diagram /> : null}
            {tabValue === 'contacts' ? <SocialLinks /> : null}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modal}>
                    <UserEditForm />
                </Fade>
            </Modal>
        </div>
    )
}

export default UserProfile
