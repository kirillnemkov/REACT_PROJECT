import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import {
    getOneProjects,
    likeProject,
    viewsProject,
} from '../../redux/actions/projects.ac'
import CreatorsUser from '../CreatorsUser/CreatorsUser'
import { Carousel } from '3d-react-carousal'
import { checkAuth } from '../../redux/actions/user.ac'
import ProjectsCard from '../ProjectsCard/ProjectsCard.jsx'
import IconButton from '@material-ui/core/IconButton'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Box from '@material-ui/core/Box'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Comment from '../Comment/Comment'

const useStyles = makeStyles((theme) => ({
    rootproject: {
        margin: '0 auto',
    },
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
    const project = useSelector((state) => state?.project)
    const projects = useSelector((state) => state?.projects)
    const errors = useSelector((state) => state?.errors)
    const user = useSelector((state) => state?.user)
    const history = useHistory()

    const { projectId } = useParams()

    useEffect(() => {
        dispatch(checkAuth(history, errors))
        dispatch(getOneProjects(projectId, errors))
        dispatch(viewsProject(projectId, user))
    }, [projectId])

    let slides = project?.image?.map((el) => {
        return <img src={el} className={styles.imageCarousel} alt="logo" />
    })

    const handleLike = (projectId, user) => {
        dispatch(likeProject(projectId, user))
    }

    return (
        <Box mx="auto">
            <ScrollToTop />
            <div className={styles.projectcont} key={projectId}>
                <div className={styles.imgcont}>
                    {project?.image?.length > 1 ? (
                        <Carousel slides={slides} />
                    ) : (
                        <img
                            src={project?.image}
                            id={styles.media}
                            className={styles.imageNotCarousel}
                            alt="logo"
                        />
                    )}

                    <div className={classes.namebutton}>
                        <b>
                            <h1>{project?.title}</h1>
                        </b>
                    </div>

                    <div id={styles.media} className={classes.urlbutton}>
                        <a className={styles.urllink} href={project?.website}>
                            VISIT SITE
                        </a>
                    </div>
                </div>

                <div className={styles.favouritecont}>
                    <IconButton
                        onClick={() => handleLike(projectId, user)}
                        id={project?._id}
                    >
                        <FavoriteIcon fontSize="large" color="secondary" />
                    </IconButton>
                    {project?.likes.length}
                    <IconButton>
                        <VisibilityOutlinedIcon fontSize="large" />
                    </IconButton>
                    {project?.views.length}
                </div>

                <div className={styles.about}>
                    <b>О ПРОЕКТЕ </b>
                    <br />
                    <p>{project?.description}</p>
                    <br />
                    <hr />
                </div>

                <div className={styles.aboutcreators}>
                    <b>
                        {project?.creators?.length > 1
                            ? 'СОЗДАТЕЛИ'
                            : 'СОЗДАТЕЛЬ'}
                    </b>
                    <div className={styles.conteinerUser}>
                        {project?.creators?.map((el) => {
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
                        <a className={styles.giticon} href={project?.gitHub}>
                            GITHUB
                        </a>
                    </div>

                    <div className={styles.socseti}>
                        <a href={project?.twitter}>
                            <img
                                className={styles.imgforicon}
                                src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                                alt="imglogo"
                            />
                        </a>
                        <a href={project?.instagram}>
                            <img
                                className={styles.imgforicon}
                                src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                                alt="imglogo"
                            />
                        </a>
                        <a href={project?.facebook}>
                            <img
                                className={styles.imgforicon}
                                src="https://img.icons8.com/color/48/000000/facebook.png"
                                alt="imglogo"
                            />
                        </a>
                    </div>
                    <div className={styles.socseti}>
                        <Comment />
                    </div>

                    <div className={styles.cardprojectall}>
                        <b>ПРОЕКТЫ ЭТОГО ВЫПУСКА</b>
                        <div className={styles.cardproject}>
                            {projects.map((el) => {
                                return <ProjectsCard el={el} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}
