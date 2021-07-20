import styles from './UserMainInfo.module.css'
import { Button, makeStyles } from '@material-ui/core/'
import EditIcon from '@material-ui/icons/Edit'
import SendIcon from '@material-ui/icons/Send'
import Modal from '../Modal/Modal'
import {useDispatch, useSelector} from 'react-redux'
import Helpers from '../../helpers/UploadsHelper'
import {setError} from '../../redux/actions/errors.ac'
import {setUserImg} from '../../redux/actions/user.ac'
import {useState} from 'react'

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '8px',
        '& .MuiButton-label': {
            justifyContent: 'end',
        },
    },
    root: {
        marginTop: '5%',
        boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 3px 0px -2px rgb(0 0 0 / 12%)',
    },
}))

const UserMainInfo = ({ handleOpen }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [drag, setDrag] = useState(false)
    const flag = 'user';
    const id = user?.id;

     function changeHandler(e) {
      const [file] = e.target.files;
      if (!file) return;
      Helpers.uploadFile(flag, file, dispatch, setError, setUserImg, id)
    }

    function dragStartHandler(e) {
      e.preventDefault()
      setDrag(true)
    }

    function dragLeaveHandler(e) {
      e.preventDefault()
      setDrag(false)
    }

    function onDropHandler(e) {
      e.preventDefault()
      let file = [...e.dataTransfer.files][0]
      setDrag(false)
      Helpers.uploadFile(flag, file, dispatch, setError, setUserImg, id)
    }

    return (
        <>
            <div className={styles.main_info}>
                <div className={styles.img_container}>
                  <div 
                  oneDragStart={dragStartHandler}
                  onDragLeave={dragLeaveHandler}
                  onDragOver={dragStartHandler}
                  onDrop={onDropHandler}
                  >
                    <img
                        src={user?.image || "/profile-user.png"}
                        className={styles.user_img}
                    ></img>
                    </div>
                    <input type="file" id="file" onChange={changeHandler} className={styles.file} />
                    <Button
                        variant="contained"
                        color="secondary"
                    >
                        <label htmlFor="file">Добавить фото</label>
                    </Button>
                </div>
                <div className={styles.name_and_info_container}>
                    <h5 className={styles.user_name}>
                        lastName firstName middleName
                    </h5>
                    <div className={styles.location}>
                        <p className={styles.location_name}>location</p>
                        <img
                            className={styles.location_img}
                            src="/location.png"
                        ></img>
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
                        onClick={handleOpen}
                        className={classes.button}
                        endIcon={<EditIcon />}
                    ></Button>
                    <Modal />
                </div>
            </div>
        </>
    )
}

export default UserMainInfo
