import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import { getOneProjects } from '../../redux/actions/projects.ac'
import CreatorsUser from '../CreatorsUser/CreatorsUser'
import { Carousel } from '3d-react-carousal'
import {checkAuth} from '../../redux/actions/user.ac'

const useStyles = makeStyles((theme) => ({
    urlbutton: {
        borderRadius: '45px',
        width: '300px',
        height: '60px',
        position: 'absolute',
        top: '180px',
        left: '800px',
        backgroundColor: '#f50157',
        textAlign: 'center',
        padding: '20px',
    },
    namebutton: {
        width: '300px',
        position: 'absolute',
        top: '20px',
        left: '800px',
        textAlign: 'center',
    },
}))

export default function ProjectProfile() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const projects = useSelector((state) => state.projects)
    const errors = useSelector((state) => state.errors)
    const history = useHistory()

    // const [open, setOpen] = useState(false)
    const { id } = useParams()

    useEffect(() => {
      dispatch(checkAuth(history, errors))
        dispatch(getOneProjects(id, errors))
    }, [])

    let slides = projects[0]?.image?.map((el) => {
        return <img src={el} className={styles.imageCarousel} alt="logo" />
    })
    console.log(projects)

    return (
        <div>
            {projects?.map((el) => {
                return (
                    <div className={styles.projectcont}>
                        <div className={styles.imgcont}>
                            {el.image?.length > 1 ? (
                                <Carousel slides={slides} />
                            ) : (
                                <img
                                    src={el.image}
                                    id={styles.media}
                                    className={styles.imageNotCarousel}
                                    alt="logo"
                                />
                            )}
                            <div className={classes.namebutton}>
                                <b>
                                    <h1>{el.title}</h1>
                                </b>
                            </div>
                            <div id={styles.media} className={classes.urlbutton}>
                                <a  className={styles.urllink} href={el.website}>
                                    VISIT SITE
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className={styles.about}>
                                <b>О ПРОЕКТЕ </b>
                                <br />
                                <p>{el.description}</p>
                                <br />
                                <hr />
                            </div>

                            <div className={styles.about}>
                                <b>
                                    {el?.creators.length > 1
                                        ? 'СОЗДАТЕЛИ'
                                        : 'СОЗДАТЕЛЬ'}
                                </b>
                                <div className={styles.conteinerUser}>
                                    {el?.creators.map((el) => {
                                        return <CreatorsUser el={el} />
                                    })}
                                </div>
                                <hr />
                                <div className={styles.usercontactscont}>
                                    <img
                                        className={styles.gitimg}
                                        src="https://img.icons8.com/metro/452/github.png"
                                        alt="github"
                                    />
                                    <a
                                        className={styles.giticon}
                                        href={el.gitHub}
                                    >
                                        GITHUB
                                    </a>
                                </div>
                                <div className={styles.socseti}>
                                    <a  href={el.twitter}>
                                        <img
                                            className={styles.imgforicon}
                                            src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                                            alt="imglogo"
                                        />
                                    </a>
                                    <a href={el.instagram}>
                                        <img
                                            className={styles.imgforicon}
                                            src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                                            alt="imglogo"
                                        />
                                    </a>
                                    <a href={el.facebook}>
                                        <img
                                            className={styles.imgforicon}
                                            src="https://img.icons8.com/color/48/000000/facebook.png"
                                            alt="imglogo"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
