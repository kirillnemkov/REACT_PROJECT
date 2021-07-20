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
  },
  goDown: {
    color: '#4520ab',
    fontSize: '4rem',
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
// import React, { useEffect, useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core'
// import SortIcon from '@material-ui/icons/Sort'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import { Link as Scroll } from 'react-scroll'
// import TextField from '@material-ui/core/TextField'
// import InputLabel from '@material-ui/core/InputLabel'
// import MenuItem from '@material-ui/core/MenuItem'
// import FormControl from '@material-ui/core/FormControl'
// import Select from '@material-ui/core/Select'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         fontFamily: 'Nunito',
//     },
//     appbar: {
//         background: 'none',
//     },
//     appbarWrapper: {
//         width: '80%',
//         margin: '0 auto',
//     },
//     appbarTitle: {
//         flexGrow: '1',
//         color: '#66eefb',
//     },
//     icon: {
//         color: '#66eefb',
//         fontSize: '2rem',
//     },
//     colorText: {
//         color: '#4520ab',
//     },
//     container: {
//         textAlign: 'center',
//     },
//     title: {
//         color: '#66eefb',
//         fontSize: '4.5rem',
//     },
//     goDown: {
//         color: '#4520ab',
//         fontSize: '4rem',
//     },
//     textField: {
//         width: '220px',
//     },
//     select: {
//         width: '140px',
//     },
// }))
// export default function Header({ changeHandler, searchText }) {
//     const classes = useStyles()
//     const [checked, setChecked] = useState(false)
//     useEffect(() => {
//         setChecked(true)
//     }, [])
//     return (
//         <>
//             <AppBar className={classes.appbar} elevation={0}>
//                 <Toolbar className={classes.appbarWrapper}>
//                     <h1 className={classes.appbarTitle}>
//                         My<span className={classes.colorText}>Elbrus.</span>
//                     </h1>
//                     <TextField
//                         id="searchText"
//                         style={{ margin: 8 }}
//                         placeholder="Поиск"
//                         fullWidth
//                         onChange={changeHandler}
//                         margin="normal"
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                         variant="outlined"
//                         value={searchText}
//                         className={classes.textField}
//                     />
//                     <FormControl
//                         variant="outlined"
//                         className={classes.formControl}
//                     >
//                         <InputLabel id="demo-simple-select-outlined-label">
//                             Сортировка
//                         </InputLabel>
//                         <Select
//                             onChange={changeHandler}
//                             className={classes.select}
//                             labelId="demo-simple-select-outlined-label"
//                             id="demo-simple-select-outlined"
//                             label="Сортировка"
//                         >
//                             <MenuItem value="">
//                                 <em>Без сортировки</em>
//                             </MenuItem>
//                             <MenuItem value={'news'}>Сначала новое</MenuItem>
//                             <MenuItem value={'views'}>
//                                 По количеству просмотров
//                             </MenuItem>
//                         </Select>
//                     </FormControl>
//                     <IconButton>
//                         <SortIcon className={classes.icon} />
//                     </IconButton>
//                 </Toolbar>
//             </AppBar>

//             <Collapse
//                 in={checked}
//                 {...(checked ? { timeout: 1000 } : {})}
//                 collapsedHeight={50}
//             >
//                 <div className={classes.container}>
//                     <h1 className={classes.title}>
//                         Welcome to <br />
//                         Elbrus
//                         <span className={classes.colorText}>Family.</span>
//                     </h1>
//                     <Scroll to="place-to-visit" smooth={true}>
//                         <IconButton>
//                             <ExpandMoreIcon className={classes.goDown} />
//                         </IconButton>
//                     </Scroll>
//                 </div>
//             </Collapse>
//         </>
//     )
// }
