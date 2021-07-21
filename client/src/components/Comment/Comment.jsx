import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useDispatch, useSelector } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Avatar} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  margin: {
    // margin: theme.spacing(1),
    // position: "absolute",
    marginTop: 100,
  },
}));

export default function Comment() {
  const classes = useStyles();
  const project = useSelector((state) => state.project)
  const user = useSelector((state) => state.user)

  const handleSubmit = () => {

  }

  const hadleChange = () => {
    
  }


  return (
    <>
      <FormControl className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <Avatar alt="Remy Sharp" src={user?.image} />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Your comment here" />
          </Grid>
        </Grid>
      </FormControl>
      </>
  );
}
