import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProjects } from '../../redux/actions/projects.ac'
import Card from '../Card/Card'

const UserProjects = () => {

    const dispatch = useDispatch()
    const projects = useSelector((state) => state.projects)

    useEffect(() => {
        dispatch(getAllProjects())
    }, [])

    return (
        <>
            {projects.map((el) => <Card {...el} />)}
        </>
    )
}

export default UserProjects
