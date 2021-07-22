import { useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {Avatar, IconButton, TextField} from '@material-ui/core';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import {setComment} from "../../redux/actions/comment.ac"

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 50,
  },
}));

export default function Comment() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const project = useSelector((state) => state.project)
  // const comments = useSelector((state) => state.comment)
  const error = useSelector((state) => state.error)
  const user = useSelector((state) => state.user)
  const [comments, setComments] = ([])
  const [input, setInput] = useState('')
  const { projectId } = useParams()


  // useEffect(() => {
  //   dispatch(getComment(id))
  // }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    let parentId
    if(e.currentTarget.id !== "input-with-icon-grid"){
     parentId = e.currentTarget.id
    } 
    dispatch(setComment(projectId, user.id, input, parentId, error))
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
      {comments?.map(item => {
        return (
          <IconButton id={item._id} type="submit" color="secondary">
            Ответить
          </IconButton>
        )
        })}
        </Grid>
      </form>
      </>
  );
}
