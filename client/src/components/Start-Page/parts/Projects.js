import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './ImageCard'
import places from '../static/places';
import { useSelector } from 'react-redux'
import useWindowPosition from '../hook/useWindowPosition'
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}))
export default function () {
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
            <div className={classes.root} id="place-to-visit">
          {  state?.map(item => {
            return <ImageCard key={item._id} payload={item} checked={checked} />
            })}
            </div>
            
        </>
    )
}
