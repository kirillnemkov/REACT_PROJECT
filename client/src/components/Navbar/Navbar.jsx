import React, { useState } from "react";
import styles from './style.module.css'
import clsx from 'clsx';
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles, Button, MenuItem, Menu, Toolbar, IconButton,
   CardMedia, SwipeableDrawer, ListItemText, ListItem,List} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 80,
    width: 80,
  },
  root: {
    background: 'linear-gradient(45deg, #f50157 30%, #f50157 90%)',
    border: 0,
    borderRadius: "7%",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  row: {
    height: 80,
    display: "flex",
    justifyContent: "space-between"
  },
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [example, setExample] = useState("default");
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const list = (anchor) => (
    <div className={clsx(classes.list, {[classes.fullList]: anchor === 'top' || anchor === 'bottom',})}
      role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['tagtag', 'tagtag', 'tagtag'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={`#${text}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <AppBar
        color={example}>
          <Toolbar className={classes.row}>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}><b>Категории</b></Button>
                <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}></MenuItem>
          </Menu>
          <Link className={classes.media} to="/"><CardMedia component="img" id={styles.media} image="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" title="logo"/></Link>
            <IconButton id={styles.media} onClick={() => setExample("transparent")} className={classes.root} color="inherit" >Войти</IconButton>
          </Toolbar>
        </AppBar>
    </React.Fragment>
  );
}
