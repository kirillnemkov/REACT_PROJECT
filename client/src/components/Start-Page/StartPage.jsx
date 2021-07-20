import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Projects from './parts/Projects'
import { getAllProjects } from '../../redux/actions/projects.ac'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Header from './parts/Header'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url()`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}))

const StartPage = () => {
    const error = useSelector((state) => state.errors)
    const dispatch = useDispatch()
    const classes = useStyles()
    useEffect(() => {
        dispatch(getAllProjects(error))
    }, [])
    
    return (
        <div className={classes.root}>
      <CssBaseline />
            <Header />
            <Projects />
        </div>
    )
}

export default StartPage
