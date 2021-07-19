import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import ModalProject from '../ModalProject/ModalProject'
import {getOneProjects} from "../../redux/actions/projects.ac"

const useStyles = makeStyles((theme) => ({
    urlbutton: {
        borderRadius: '45px',
        width: '300px',
        height: "25px",
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
    const projects = useSelector((state) => state.projects)
    const errors = useSelector((state) => state.errors)

    const [open, setOpen] = useState(false)
    const { id } = useParams()

    useEffect(() => {
      dispatch(getOneProjects(id, errors))
    }, [])

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            {projects?.map((el) => {
                return (
                    <div className={styles.projectcont}>
                        <div className={styles.imgcont}>
                            <img
                                onClick={handleOpen}
                                className={styles.projectimg}
                                src={el.image}
                                alt="project"
                            />
                            <div className={classes.namebutton}><b><h2>{el.title}</h2></b></div>
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
                            <p>{el.description}</p>
                            <br/>
                            <hr/>
                            </div>

                            <div className={styles.about}>
                              <b>{el?.creators.length > 1 ? "СОЗДАТЕЛИ" : "СОЗДАТЕЛЬ"}</b>
                              {el?.creators.map((el) => {
                                return (
                                  <>
                                  <div className={styles.usercont}>
                                  <img src={el.image} className={styles.userimage} alt="userimage"/>
                                  <div>{el.username}</div>
                                  <div>{el.lastName} {el.firstName} {el.middleName}</div>
                                  <div>Email - {el.email}</div>
                                  </div>
                                  <div className={styles.usercontacts}>{el.gitHub}</div>
                                  </>
                                )
                              })}
                            <hr/>
                            </div>



                            {/* <div>Ссылка на гитхаб - {el.gitHub}</div>
                            <div>Сайт проекта - {el.website}</div>
                            <div>Твиттер - {el.twitter}</div>
                            <div>Инста - {el.instagram}</div>
                            <div>Фейс - {el.facebook}</div>
                            <div>Выпуск - {el.date}</div> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
