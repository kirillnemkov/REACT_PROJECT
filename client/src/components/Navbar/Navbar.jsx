import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar, IconButton, CardMedia, Drawer, ListItemIcon, ListItemText, ListItem,List} from "@material-ui/core";

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
    width: 170,
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

  const list = (anchor) => (
    <div className={clsx(classes.list, {[classes.fullList]: anchor === 'top' || anchor === 'bottom',})}
      role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Tag', 'Tag', 'Tag', 'Tag', 'Tag', 'Tag', 'Tag', 'Tag'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>#</ListItemIcon>
            <ListItemText primary={text} />
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
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Tag</MenuItem>
          </Menu>
          <CardMedia component="img" className={classes.media} image="images/elbruslogotip.jpg" title="logo"/>
            <IconButton onClick={() => setExample("transparent")} className={classes.root} color="inherit" >Войти</IconButton>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

