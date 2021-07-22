import { SET_ANOTHER_INFO } from '../types/anotherUserTypes'
import { disableLoader, enableLoader } from './loader.ac'
import { setError, deleteError } from './errors.ac'
import UserService from '../../services/UserService';

export const setAnotherUser = (user) => ({
    type: SET_ANOTHER_INFO,
    payload: user,
})

export const AnotherUserInfo = (id, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await UserService.getUserInfo(id)
        console.log(response.data)
        dispatch(setAnotherUser(response.data))
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