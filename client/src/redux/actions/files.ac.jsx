import { UPLOAD_FILE, EDIT_FILE, DELETE_FILE, INIT_FILES } from '../types/filesTypes';

export const initFiles= () => ({
  type: INIT_FILES,
});

export const uploadFile= (file) => ({
  type: UPLOAD_FILE,
  payload: file
});

export const editeFile = (file) => ({
  type: EDIT_FILE,
  payload: file
})

export const deleteFile = (id) => ({
  type: DELETE_FILE,
  payload: {id}
})
