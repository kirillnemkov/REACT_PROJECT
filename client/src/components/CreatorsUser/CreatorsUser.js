import { makeStyles } from '@material-ui/core/styles'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import {
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 250,
        marginTop: 10,
        marginLeft: 15,
    },
    media: {
        height: 0,
        paddingTop: '80%',
    },
    
}))

export default function CreatorsUser({ el }) {
    const classes = useStyles()

    return (
        <Link to={`/profile/${el._id}`}>
            <Card className={classes.root} id={styles.media} key={el.id}>
                <CardHeader title={`${el?.lastName} ${el?.firstName}`} />
                <CardMedia className={classes.media} image={el?.image} />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {el?.about && el.about}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}
