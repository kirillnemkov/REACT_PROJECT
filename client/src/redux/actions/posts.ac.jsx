import { disableLoader, enableLoader } from './loader.ac'
import { setError} from './errors.ac'
import { GET_ALL_POSTS, GET_ONE_POSTS } from '../types/postsTypes'

export const postsGetAll = (posts) => ({
    type: GET_ALL_POSTS,
    payload: { posts },
})

export const getPosts = () => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await fetch(process.env.REACT_APP_API_URL, { credentials: "include" })
        const posts = await response.json()
        dispatch(postsGetAll(posts))
        dispatch(disableLoader())
    } catch (error) {
        dispatch(setError(error))
    }
    dispatch(disableLoader())
}

export const postGet = (post) => ({
  type: GET_ONE_POSTS,
  payload: {post},
})

export const getPost = (id) => async (dispatch) => {
  dispatch(enableLoader())
  try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/project/${id}`, { credentials: "include" })
      const post = await response.json()
      dispatch(postGet(post))
      dispatch(disableLoader())
  } catch (error) {
      dispatch(setError(error))
  }
  dispatch(disableLoader())
}
