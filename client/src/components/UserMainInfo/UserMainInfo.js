import styles from './UserMainInfo.module.css'
import { Button, makeStyles } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '8px',
        '& .MuiButton-label': {
            justifyContent: 'end'
        },
        '& .makeStyles-button-10:nth-child(1)': {
            margin: 0
        }
    },
    addButton: {
        width: '100%',
        height: '36px',
        '& .MuiButton-endIcon': {
            marginLeft: 0
        },
    },
    root: {
        marginTop: '5%',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 3px 0px -2px rgb(0 0 0 / 12%)'
    }
}));


const UserMainInfo = ({ handleOpen, handleProjectModalOpen }) => {
    const user = useSelector(state => state.user?.info)
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
                    <h5 className={styles.user_name}>{user?.firstName, user?.middleName, user?.lastName}</h5>
                    <div className={styles.location}>
                        <p className={styles.location_name}>{user?.location}</p>
                        <img className={styles.location_img} src="/location.png"></img>
                    </div>
                    <p>{user?.job}</p>
                </div>
                <div className={styles.button_group__userProfile}>

                    <div className={styles.upButtons}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            endIcon={<SendIcon />}
                        ></Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleOpen}
                            className={classes.button}
                            endIcon={<EditIcon />}
                        ></Button>
                    </div>
                    <div>
                        <Button variant="contained"
                            color="secondary"
                            onClick={handleProjectModalOpen}
                            className={classes.addButton}
                            endIcon={<AddIcon />}>
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserMainInfo