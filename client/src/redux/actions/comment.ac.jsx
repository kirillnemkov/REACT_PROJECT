import {PROJECT_COMMENT} from '../types/projectsTypes'
import { disableLoader, enableLoader } from './loader.ac'
import { setError, deleteError } from './errors.ac'
import ProjectsService from '../../services/ProjectsService'

const projectComment = (comment) => ({
  type: PROJECT_COMMENT,
  payload: {comment},
})

const getProjectComment = (comment) => ({
  type: PROJECT_COMMENT,
  payload: {comment},
})

export const postComment = (id, user, input, errors) => async (dispatch) => {
  dispatch(enableLoader())
  try {
      const response = await ProjectsService.postCommentForProject(id, user, input)
      dispatch(projectComment(response.data))
      console.log(response.data);
      if (errors) dispatch(deleteError())
  } catch (error) {
      const message = error?.response?.data?.message
      message
          ? dispatch(setError(message))
          : dispatch(setError('Возникли технические проблемы на сервере'))
  } finally {
      dispatch(disableLoader())
  }
}

export const getComment = (id, errors) => async (dispatch) => {
  dispatch(enableLoader())
  try {
      const response = await ProjectsService.getCommentForProject(id)
      console.log(response)
      dispatch(getProjectComment(response.data))
      console.log(response.data);
      if (errors) dispatch(deleteError())
  } catch (error) {
      const message = error?.response?.data?.message
      message
          ? dispatch(setError(message))
          : dispatch(setError('Возникли технические проблемы на сервере'))
  } finally {
      dispatch(disableLoader())
  }
}
