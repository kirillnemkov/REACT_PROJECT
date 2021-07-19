import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './ImageCard'
<<<<<<< HEAD:client/src/components/Start-Page/parts/Projects.js
// import places from '../static/places';
=======
>>>>>>> e474254e47a6d152d21de696cc8831e143e49d5e:client/src/components/Start-Page/parts/Projects.jsx
import { useSelector } from 'react-redux'
import useWindowPosition from '../hook/useWindowPosition'
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // flex: '0 0 33.333333%',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}))
export default function Projects () {
    const state = useSelector((state) => state.projects)
    const classes = useStyles()
    const checked = useWindowPosition('header')

    return (
        <>
            <div className={classes.root} id="place-to-visit">
          {  state?.map(item => {
            return <ImageCard key={item._id} payload={item} checked={checked} />
            })}
            </div>
             
        </>
    )
}
