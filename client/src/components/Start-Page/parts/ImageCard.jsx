import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
  link: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  head: {
    width: '33%',
    '&:nth-child(-n+3)': {
      marginTop: '100px'
    }
  }
});

export default function ImageCard({payload, handleClick, checked}) {
  const classes = useStyles();

  return (
    <Collapse className={classes.head} in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={payload.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {payload.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {payload.description}
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              <Link to='' className={classes.link}>{payload.hashtags}</Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteIcon fontSize="large" color="secondary" />
              </IconButton>
              {payload.likes}
              <IconButton aria-label="add to favorites">
                <VisibilityOutlinedIcon fontSize="large" />
              </IconButton>{payload.views}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Collapse>
  );
}
