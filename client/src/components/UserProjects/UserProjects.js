import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts.ac'
import Card from '../Card/Card'

const UserProjects = () => {

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <>
            <div className="container" style={{ paddingTop: '80px' }}>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {posts.map((el) => <Card {...el} />)}
                </div>
            </div>
        </>
    )
}

export default UserProjects