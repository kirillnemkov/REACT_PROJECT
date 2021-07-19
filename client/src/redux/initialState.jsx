const initState = {
  projects: [],
  user: null,
  loader: false,
  error: null,
  skills: {}
}

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'))
  return stateFromLS ? stateFromLS : initState;
}

export default getInitState;
