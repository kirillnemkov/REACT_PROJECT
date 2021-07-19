import { PROJECTS_INIT, PROJECT_EDIT, PROJECT_DELETE, PROJECT_CREATE } from "../types/projectsTypes";

const projectsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECTS_INIT: {
      const { projects } = payload;
      return projects;
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

export default projectsReducer;
