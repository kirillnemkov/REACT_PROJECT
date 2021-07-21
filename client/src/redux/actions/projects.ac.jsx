import { disableLoader, enableLoader } from './loader.ac'
import { setError, deleteError } from './errors.ac'
import {PROJECTS_INIT,PROJECT_DELETE,PROJECT_EDIT,PROJECT_CREATE, PROJECT_ONE, PROJECT_LIKE} from '../types/projectsTypes'
import ProjectsService from '../../services/ProjectsService'

const projectOne = (project) => ({
  type: PROJECT_ONE,
  payload: {project},
})

const projectsInit = (projects) => ({
    type: PROJECTS_INIT,
    payload: { projects },
})

const projectLike = (project) => ({
  type: PROJECT_LIKE,
  payload: { project },
})

const projectEdit = (project) => ({
    type: PROJECT_EDIT,
    payload: { project },
})

const projectDelete = (id) => ({
    type: PROJECT_DELETE,
    payload: { id },
})

const projectCreate = (project) => ({
    type: PROJECT_CREATE,
    payload: { project },
})

export const likeProject = (id, user, errors) => async (dispatch) => {
  dispatch(enableLoader())
  try {
      const response = await ProjectsService.getLikeProjects(id, user)
      dispatch(projectLike(response.data))
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

export const createProject = (payload, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await ProjectsService.createProject(payload)
        dispatch(projectCreate({ project: response.data }))
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

export const getOneProjects = (id, errors) => async (dispatch) => {
  dispatch(enableLoader())
  try {
      const response = await ProjectsService.getOneProjects(id)
      dispatch(projectOne(response.data.project))
      dispatch(projectsInit(response.data.projects))
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

export const getAllProjects = (errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await ProjectsService.getAllProjects()
        if (errors) dispatch(deleteError())
        dispatch(projectsInit(response.data))
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}

export const editProject = (payload, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await ProjectsService.editProject(payload)
        dispatch(projectEdit({ project: response.data }))
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

export const deleteProject = (id, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        await ProjectsService.deleteProject(id)
        dispatch(projectDelete({ id }))
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
