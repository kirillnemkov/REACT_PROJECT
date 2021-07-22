import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProjects } from '../../redux/actions/projects.ac'
import ProjectsCard from "../ProjectsCard/ProjectsCard.jsx"
import styles from "./style.module.css"

const UserProjects = () => {

    const dispatch = useDispatch()
    const projects = useSelector((state) => state.projects)
    const user = useSelector((state) => state.AnotherUser)

    useEffect(() => {
        dispatch(getAllProjects())
    }, [])

    return (
        <div className={styles.rootcard}>
            {user.userProjects.map((el) => <ProjectsCard el={el} />)}
        </div>
    )
}

export default UserProjects
