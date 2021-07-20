import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './ImageCard'
import { useSelector } from 'react-redux'
import useWindowPosition from '../hook/useWindowPosition'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        margin: '0 auto',
        width: '100%',
        maxWidth: '1400px'
    },
}))
export default function Projects () {
    const state = useSelector((state) => state.projects)
    const classes = useStyles()
    const checked = useWindowPosition('header')

    return (
        <>
            <div className={classes.root} id="place-to-visit">
            <Grid container spacing={0.5}>
          {  state?.map(item => {
            return<Grid item xs={4}> <ImageCard key={item._id} payload={item} checked={checked} /></Grid>
            })}
            </Grid>
            </div>
             
        </>
    )
}
