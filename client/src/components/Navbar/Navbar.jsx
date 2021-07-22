import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import {makeStyles, Button, MenuItem, Menu, Toolbar, IconButton,
   CardMedia, SwipeableDrawer, ListItemText, ListItem,List} from "@material-ui/core";
import { AppBar } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Box from '@material-ui/core/Box';
import { checkAuth, signOut } from "../../redux/actions/user.ac";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 80,
    width: 80,
  },
  mediaSignIn: {
    height: 80,
    width: 80,
    marginLeft: '10%',
  },
  root: {
    background: 'linear-gradient(45deg, #b1b1b1 30%, #D8D8D8 90%)',
    borderRadius: "7%",
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
  sort: {
    '& .MuiFormControl-root' : {
      width: '100%'
    }
  }
}));

export default function Navbar({searchText, changeHandler}) {
  const classes = useStyles();
  const [example, setExample] = useState("default");
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState(false);
  const errors = useSelector((state) => state.errors)
  const user = useSelector((state) => state.user)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    checkAuth(history, errors)
  }, [])

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const signOutHandler = (e) => {
    console.log(e.target)
    dispatch(signOut())
  }

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
        console.log(user)
  return (
    <React.Fragment >
      <AppBar
        color={example} style={{ backgroundColor: "whitesmoke"}}>
          <Grid container spacing={1} direction='column'>
          <Grid item direction='row'>
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
         
          {!user ? 
          <><Link className={classes.media} to="/"><CardMedia component="img" id={styles.media} image="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" title="logo"/></Link>
          <Link to="/auth"><IconButton id={styles.media} onClick={() => setExample("transparent")} className={classes.root} color="inherit" >Войти</IconButton></Link> </>
          :<>
          <Link className={classes.mediaSignIn} to="/"><CardMedia component="img" id={styles.media} image="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" title="logo"/></Link>
          <Box>
            <Link to={`/profile/${user?.id}`}><IconButton id={styles.media} className={classes.root} color="inherit">Профиль</IconButton></Link> <Link to="/auth"><IconButton id={styles.media} onClick={signOutHandler} className={classes.root} color="inherit" >Выйти</IconButton></Link></Box></>}
          </Toolbar>
          </Grid>
          {history.location.pathname === '/' &&
          <Grid container spacing={4} direction='row' alignItems='center' justifyContent='center'>
          <Grid item xs={8} >
          <TextField
                        id="searchText"
                        style={{ margin: 8 }}
                        placeholder="Поиск"
                        fullWidth
                        onChange={changeHandler}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={searchText}
                        className={classes.textField}
                    />
                    </Grid>
                    <Grid item xs={3} className={classes.sort}>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-outlined-label">
                            Сортировка
                        </InputLabel>
                        <Select
                            onChange={changeHandler}
                            className={classes.select}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Сортировка"
                        >
                            <MenuItem value="">
                                <em>Без сортировки</em>
                            </MenuItem>
                            <MenuItem value={'date'}>Сначала новое</MenuItem>
                            <MenuItem value={'views'}>
                                По количеству просмотров
                            </MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    </Grid>
}
                    </Grid>
        </AppBar>
    </React.Fragment>
  );
}
