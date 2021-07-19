import { SET_USER, DELETE_USER } from '../types/userTypes'
import { GET_SKILLS } from "../types/skillsTypes";
import { disableLoader, enableLoader } from './loader.ac'
import { setError, deleteError } from './errors.ac'
import axios from 'axios'
import AuthService from '../../services/AuthService'
import SkillsService from "../../services/SkillsService";
const { REACT_APP_API_URL: host } = process.env

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
})

export const deleteUser = () => ({
    type: DELETE_USER,
})

export const signUp = (payload, history, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        await AuthService.signUp(payload)
        if (errors) dispatch(deleteError())
        history.replace('/signUp/success')
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}

export const signIn = (payload, history, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await AuthService.signIn(payload)
        const { user, accessToken } = response.data
        dispatch(setUser(user))
        localStorage.setItem('token', accessToken)
        if (errors) dispatch(deleteError())
        history.replace('/main')
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}

export const signOut = (errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await AuthService.signOut()
        dispatch(deleteUser())
        if (errors) dispatch(deleteError())
        localStorage.removeItem('token')
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}

export const confirmAuth = (link, history, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await AuthService.confirmAuth(link)
        const { user, accessToken } = response.data
        dispatch(setUser(user))
        localStorage.setItem('token', accessToken)
        if (errors) dispatch(deleteError())
        history.replace('/')
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}

export const checkAuth = (history, errors) => async (dispatch) => {
    try {
        dispatch(enableLoader())
        const response = await axios.get(`${host}/api/v1/auth/refresh`, {
            withCredentials: true,
        })
        const { user, accessToken } = response.data
        dispatch(setUser(user))
        localStorage.setItem('token', accessToken)
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

export const sendResetPasswordLetter =
    (payload, errors) => async (dispatch) => {
        try {
            dispatch(enableLoader())
            await AuthService.sendResetPasswordLetter(payload)
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
        
        export const updatePassword = (link, errors, history, payload) => async (dispatch) => {
          try {
            dispatch(enableLoader())
              const response = await AuthService.updatePassword(payload, link)
              const { user, accessToken } = response.data
              dispatch(setUser(user))
              localStorage.setItem('token', accessToken)
              if (errors) dispatch(deleteError())
              history.push('/main')
          } catch (error) {
              const message = error?.response?.data?.message
              message
                  ? dispatch(setError(message))
                  : dispatch(setError('Возникли технические проблемы на сервере'))
          } finally {
              dispatch(disableLoader())
          }
        }

        const getSkills = (data) => ({
            type: GET_SKILLS,
            payload: data,
        })
        
        export const updateSkills = (id, payload, errors) => async (dispatch) => {
            dispatch(enableLoader())
            try {
                const response = await SkillsService.updateSkills(id, payload)
                dispatch(getSkills(response.data))
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