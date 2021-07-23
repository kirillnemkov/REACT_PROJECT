import { useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {Avatar, IconButton, TextField} from '@material-ui/core';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import {setComment} from "../../redux/actions/comment.ac"
import { Divider, Paper } from "@material-ui/core";
import CommentCard from './CommentCard'
import {getAllComments} from '../../redux/actions/comment.ac'


const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 50,
  },  
}));

export default function Comment() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const project = useSelector((state) => state.project)
  const comments = useSelector((state) => state.comment)
  const error = useSelector((state) => state.error)
  const user = useSelector((state) => state.user)
  const [input, setInput] = useState('')
  const { projectId } = useParams()

  useEffect(() => {
    dispatch(getAllComments(projectId))
  }, [])


  const clickHandler = (e) => {
    e.stopPropagation()
    if(input){
    if(e.currentTarget.dataset.id === "head-input"){
    let parentId;
    dispatch(setComment(projectId, user.id, input, parentId, error))
    } else{
      const parentId = e.currentTarget.dataset.id;
      dispatch(setComment(projectId, user.id, input, parentId, error))
    }
  }
}

  const hadleChange = (e) => {
    setInput(e.target.value);
  }

  // function clickHandler(e) {
  //   e.stopPropagation()
  //   const parentId = e.currentTarget.dataset.id
  //   console.log(parentId)
  //   dispatch(setComment(projectId, user.id, input, parentId, error))
  // }


  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} style={{width: '100%', maxWidth: '600px'}} method="POST" className={classes.margin} >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <Avatar alt="Remy Sharp"  />
          </Grid>
          <Grid item>
            <TextField onChange={(e) => hadleChange(e)} id="input-with-icon-grid" label="Your comment here" />
          </Grid>
        <IconButton onClick={clickHandler} data-id="head-input" type="submit" color="secondary">
          <ChevronRightOutlinedIcon />
        </IconButton>
        <Grid container direction='column'>
        <div style={{ padding: 14 }} className="App">
      <h1>Comments</h1>
      <Paper style={{ padding: " 0 20px", width: '100%' }}>
        
      {
        comments.length ? 
          comments.map(comment => 
        <CommentCard key={comment._id} clickHandler={clickHandler} hadleChange={hadleChange} comment={comment}/> )
        : <p>Comments not found</p>
        
        }

      </Paper>
      </div>
        </Grid>
        </Grid>
      </form>
      </>
  );
}
