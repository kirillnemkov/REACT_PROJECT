import React, { useState } from "react";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles, Button, MenuItem, Menu, Toolbar, IconButton,
   CardMedia, SwipeableDrawer, ListItemIcon, ListItemText, ListItem,List} from "@material-ui/core";

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
        {['tagtag', 'tagtag', 'tagtag', 'Tag', 'Tag', 'Tag'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={`#${text}`} />
            {/* <ListItemIcon></ListItemIcon> */}
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
          <div>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>Категории</Button>
                <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Tag</MenuItem>
          </Menu>
          <Link to="/"><CardMedia component="img" className={classes.media} image="images/elbruslogotip.jpg" title="logo"/></Link>
            <IconButton onClick={() => setExample("transparent")} className={classes.root} color="inherit" >Войти</IconButton>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

