import { makeStyles } from '@material-ui/core/styles'
import styles from './style.module.css'
import { Link, useParams } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import {
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core'
import { grey, indigo} from '@material-ui/core/colors'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton'
import { useSelector } from 'react-redux'




const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        marginBottom: 50,
        marginTop: 10,
        marginLeft: 15,
        backgroundColor: indigo[400],
        color: grey[100],
    },
    media: {
        height: 0,
        paddingTop: '80%',
    },
    
}))

export default function ProjectsCardForUser({ el }) {
  const classes = useStyles()
  const currentUser = useSelector((state) => state?.user)
  const {id} = useParams()
    return (
        <Link to={`/projects/${el._id}`} >
            <Card className={classes.root} id={styles.media} key={el?._id}>
                <CardMedia className={classes.media} image={el?.image[0]} />
                <CardHeader title={el?.title}/>
                <CardContent style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                 <Typography variant="body2"> {el?.date} </Typography> 
                 <Typography> {id == currentUser?.id &&<IconButton>
                            <DeleteOutlineIcon
                                fontSize="medium"
                                style={{ color: grey[100] }}
                            />
                        </IconButton>}</Typography>
             </CardContent> 
            </Card>
        </Link>
  )
}
