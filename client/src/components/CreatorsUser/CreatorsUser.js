import { makeStyles } from '@material-ui/core/styles'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import {
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Typography,
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}))

export default function CreatorsUser({ el }) {
    const classes = useStyles()

    return (
        <Link to={`/profile/${el.id}`}>
            <Card className={classes.root} id={styles.media}>
                <CardHeader
                    title={`${el.lastName} ${el.firstName}`}
                    subheader={el.date}
                />
                <CardMedia className={classes.media} image={el.image} />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {el?.about && el.about}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton color="primary">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton style={{ color: red[500] }}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <FacebookIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Link>
    )
}
