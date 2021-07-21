import { useParams} from 'react-router-dom'
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {Avatar, IconButton, TextField} from '@material-ui/core';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import {getComment} from "../../redux/actions/projects.ac"

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 100,
  },
  root: {
    position: "absolute",
    top: 200,
  }
}));

export default function Comment() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const project = useSelector((state) => state.project)
  const user = useSelector((state) => state.user)
  const [input, setInput] = useState('')
  const { id } = useParams()


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(getComment(id, user, input))
  }

  const hadleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} method="POST" className={classes.margin} >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <Avatar alt="Remy Sharp" src={user?.image} />
          </Grid>
          <Grid item>
            <TextField onChange={(e) => hadleChange(e)} id="input-with-icon-grid" label="Your comment here" />
          </Grid>
        <IconButton type="submit" color="secondary">
          <ChevronRightOutlinedIcon />
        </IconButton>
        </Grid>
      </form>
      <div className={classes.root}>{project?.comments.map((el) => <p>{el.title}</p>)}</div>
      </>
  );
}
