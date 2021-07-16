const initState = {
  files: [],
  posts: [],
  user: null,
  loader: false,
  error: null,
}

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'))
  return stateFromLS ? stateFromLS : initState;
}

export default getInitState;
