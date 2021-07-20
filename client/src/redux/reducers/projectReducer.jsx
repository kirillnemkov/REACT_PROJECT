import { PROJECT_EDIT, PROJECT_DELETE, PROJECT_CREATE, PROJECT_ONE } from "../types/projectsTypes";

const projectReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECT_ONE: {
      const { project } = payload;
      return project;
    }
    case PROJECT_CREATE: {
      const { project } = payload;
      const newState = [...state, project];
      return newState
    }
    case PROJECT_EDIT: {
      const { project } = payload;
      const newState = state.map(item => item._id === project._id? project : item)
      return newState
    }
    case PROJECT_DELETE: {
      const { id } = payload;
      const newState = state.filter(item => item._id !== id)
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default projectReducer;
