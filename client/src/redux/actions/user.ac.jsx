import { SET_USER, DELETE_USER } from '../types/userTypes';
import { disableLoader, enableLoader } from './loader.ac';
import {setError, deleteError} from './errors.ac';
import axios from 'axios';
import AuthService from '../../services/AuthService';
const { REACT_APP_API_URL: host} = process.env

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const deleteUser = () => ({
  type: DELETE_USER,
})

export const signIn = (payload, history) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await AuthService.signIn(payload);
  if (response.status === 200) {
    const {user, accessToken} = response.data;
    dispatch(setUser(user));
    localStorage.setItem('token', accessToken);
    history.replace('/main');
  } else {
    const error = await response.json();
    dispatch(setError(error))
  }
  dispatch(disableLoader());
};

export const signUp = (payload, history) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await AuthService.signUp(payload);
  if (response.status === 200) {
    history.replace('/signUp/success');
  } else {
    const error = response.data;
    console.log(error);
    // history.replace('/auth');
  }
  dispatch(disableLoader());
};

export const signOut = () => async (dispatch) => {
  dispatch(enableLoader());
  const response = await AuthService.signOut();
  if (response.status === 200) {
    dispatch(deleteUser());
    localStorage.removeItem('token');
  }
  dispatch(disableLoader());
};

export const confirmAuth = (link, history) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await AuthService.confirmAuth(link);
  if (response.status === 200) {
    const {user, accessToken} = response.data;
    dispatch(setUser(user));
    localStorage.setItem('token', accessToken);
    history.replace('/main');
  } else {
    const error = response.data;
    dispatch(setError(error));
    history.replace('/auth');
  }
  dispatch(disableLoader())
}

export const checkAuth = () => async (dispatch) => {
  try{
    dispatch(enableLoader());
    const response = await axios.get(`${host}/api/v1/auth/refresh`, {withCredentials: true});
    const {user, accessToken} = response.data;
    dispatch(setUser(user));
    localStorage.setItem('token', accessToken);
    history.replace('/main');
  }catch(err) {
    dispatch(setError(error));
  }
finally{
  dispatch(disableLoader());
}
};
