import { GET_SKILLS } from "../types/skillsTypes";
import axios from 'axios'
import AuthService from '../../services/AuthService'
import { setError, deleteError } from './errors.ac'
import { disableLoader, enableLoader } from './loader.ac'
import SkillsService from "../../services/SkillsService";

const { REACT_APP_API_URL: host } = process.env

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