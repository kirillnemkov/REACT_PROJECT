import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import { getPost } from '../../redux/actions/posts.ac'
import ModalProject from '../ModalProject/ModalProject'

const useStyles = makeStyles((theme) => ({
    urlbutton: {
        borderRadius: '20% 20% 20% 20%',
        width: '300px',
        height: "60px",
        position: 'absolute',
        top: '100px',
        left: '800px',
        backgroundColor: '#f50157',
        textAlign: "center",
        padding: "20px", 
    },
    namebutton:{
      width: "300px",
      position: 'absolute',
      top: '10px',
      left: '800px',
      textAlign: "center",
    }
}))

export default function ProjectProfile() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    const {users} = posts;
    console.log(posts);
    console.log(users);
    const [open, setOpen] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getPost(id))
    }, [])

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            {posts.map((el) => {
                return (
                    <div className={styles.projectcont}>
                        <div className={styles.imgcont}>
                            <img
                                onClick={handleOpen}
                                className={styles.projectimg}
                                src={el.image}
                                alt="project"
                            />
                            <div className={classes.namebutton}><b><h2>{el.name}</h2></b></div>
                            <div className={classes.urlbutton}>
                                <a className={styles.urllink} href={el.url}>
                                    VISIT SITE
                                </a>
                            </div>
                            <div className={styles.projectbottom}>
                                {el.date}
                            </div>
                        </div>
                        {open && (
                            <ModalProject
                                handleClose={handleClose}
                                open={open}
                                image={el.image}
                            />
                        )}

                        <div>
                            <div className={styles.about}>
                              <b>О ПРОЕКТЕ </b><br/>
                            <p>{el.about}</p>
                            <br/>
                            <hr/>
                            </div>

                            <div className={styles.about}>
                              <b>{el.users.length > 1 ? "СОЗДАТЕЛИ" : "СОЗДАТЕЛЬ"}</b>
                              {el.users.map((el) => {
                                return (
                                  <div>{el.name}</div>
                                )
                              })}
                            </div>


                            <div>Ссылка на гитхаб - {el.gitHub}</div>
                            <div>Сайт проета - {el.url}</div>
                            <div>Твиттер - {el.twitter}</div>
                            <div>Инста - {el.instagram}</div>
                            <div>Фейс - {el.facebook}</div>
                            <div>Выпуск - {el.date}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
