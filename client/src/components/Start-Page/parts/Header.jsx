import React, { useState, useEffect } from "react";
import {makeStyles, IconButton,
   Collapse} from "@material-ui/core";
   import { Link as Scroll } from 'react-scroll';
   import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
   import Navbar from '../../Navbar/Navbar'

const useStyles = makeStyles((theme) => ({
  media: {
    height:70,
    width: 70,
    borderRadius: "50px",
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #002884 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  head: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: 'Nunito',
  },
  row: {
    display: "flex",
    justifyContent: "space-between"
  },
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
  colorText: {
    color: '#4520ab',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#66eefb',
    fontSize: '4.5rem',
    position: 'relative'
  },
  goDown: {
    color: '#4520ab',
    fontSize: '4rem',
  },
  video: {
    position: 'absolute',
    opacity: '0.5',
    width: '100%',
    top: '0',
    height: '100%',
    objectFit: 'cover'
  }
}));

export default function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const classes = useStyles();

  return (
      <div className={classes.head} id="header">
        <Navbar />
        <video className={classes.video} src="video.mp4" muted loop autoPlay>
          </video>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Elbrus<span className={classes.colorText}>Family.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
      </div>
  );
}

