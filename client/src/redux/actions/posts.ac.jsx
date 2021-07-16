import { disableLoader, enableLoader } from './loader.ac'
import { setError, deleteError } from './errors.ac'
import { GET_ALL_POSTS } from '../types/postsTypes'

export const postsGetAll = (posts) => ({
    type: GET_ALL_POSTS,
    payload: { posts },
})

export const getPosts = () => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await fetch(process.env.REACT_APP_API_URL)
        const posts = await response.json()
        dispatch(postsGetAll(posts))
        dispatch(disableLoader())
    } catch (error) {
        dispatch(setError(error))
    }
    dispatch(disableLoader())
}
