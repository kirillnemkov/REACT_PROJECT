import styles from './userProfile.module.css';
import { Paper, Tabs, Tab } from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Diagram from '../Daigram/Diagram'
import SocialLinks from '../SocialLinks/SocialLinks';
import About from '../About/About';
import UserMainInfo from '../UserMainInfo/UserMainInfo';
import UserProjects from '../UserProjects/UserProjects';
import UserEditForm from '../UserEditForm/UserEditForm';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '8px',
        '& .MuiButton-label': {
            justifyContent: 'end'
        },
    },
    root: {
        marginTop: '5%',
        marginBottom: '3%',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 3px 0px -2px rgb(0 0 0 / 12%)'
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
}));

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
    {
        value: 0,
    },
    {
        value: 20,
    },
    {
        value: 37,
    },
    {
        value: 100,
    },
];

const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);





const UserProfile = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState('');
    const [modal, setModal] = useState(false)

    function handleChange(e, value) {
        setTabValue(value)
    }

    console.log(modal)

    function handleModalChange(e) {
        setModal((prev) => !prev)
    }



    return (
        <div className={styles.userProfile_container}>

            <UserMainInfo handleModalChange={handleModalChange} modal={modal} />
            <Paper className={classes.root}>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    value={tabValue}
                    onChange={handleChange}
                >
                    <Tab label="О себе" value="about" />
                    <Tab label="Проекты" value='projects' />
                    <Tab label="Скиллы" value='skills' />
                    <Tab label="Контакты" value='contacts' />
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

            {/* <IOSSlider aria-label="ios slider" defaultValue={60} marks={marks} valueLabelDisplay="on" /> */}

        </div>
    )
}

export default UserProfile
