import styles from './UserMainInfo.module.css'
import { Button, makeStyles } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '8px',
        '& .MuiButton-label': {
            justifyContent: 'end'
        },
    },
    root: {
        marginTop: '5%',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 3px 0px -2px rgb(0 0 0 / 12%)'
    }
}));


const UserMainInfo = ({ handleModalChange }) => {
    const classes = useStyles();
    return (
        <>
            <div className={styles.main_info}>
                <div className={styles.img_container}>
                    <img src="/profile-user.png" className={styles.user_img}></img>
                    <Button variant="contained" color="secondary">
                        Добавить фото
                    </Button>
                </div>
                <div className={styles.name_and_info_container}>
                    <h5 className={styles.user_name}>lastName firstName middleName</h5>
                    <div className={styles.location}>
                        <p className={styles.location_name}>location</p>
                        <img className={styles.location_img} src="/location.png"></img>
                    </div>
                    <p>job</p>
                </div>
                <div className={styles.button_group__userProfile}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        endIcon={<SendIcon />}
                    ></Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleModalChange}
                        className={classes.button}
                        endIcon={<EditIcon />}
                    ></Button>
                </div>
            </div>
        </>
    )
}

export default UserMainInfo