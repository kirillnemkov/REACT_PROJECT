import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Avatar, IconButton, TextField} from '@material-ui/core';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 50,
  },
  commentCard: {
    paddingTop: 20,
    width: '100%',
    position: 'relative',
    '& .MuiGrid-container': {
      borderBottom: '1px solid #bdbdbd'
    },
  },
  childComment: {
    marginLeft: 100,
    marginBottom: 24
  }
  
}));

const CommentCard = ({hadleChange, clickHandler, comment, type}) => {
  const classes = useStyles();

  const nestedComments = (comment.children || []).map(childComment => {
    return <CommentCard key={childComment._id} hadleChange={hadleChange} clickHandler={clickHandler} comment={childComment} type="childComment" />
  })

    return (
        <div className={`${classes.commentCard} ${classes[type]}`}>
        <Grid container wrap="nowrap" spacing={2} direction='column'>
          <Grid item>
            <Avatar alt="Remy Sharp" src={comment.img} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth >
            <h4 style={{ margin: 0, textAlign: "left" }}>{comment.username}</h4>
            <p style={{ textAlign: "left" }}>
   {comment.text}
            </p>
            <p style={{ textAlign: "left", color: "gray"}}>
              
            </p>
            <a style={{cursor: 'pointer'}}>
              Ответить
        </a>
          </Grid>
          <Grid container item xs style={{display: 'flex'}}>
        <TextField  onChange={(e) => hadleChange(e)} style={{flexGrow: 1}} id="outlined-basic" label="type your answer here" variant="outlined"  multiline />
        <IconButton data-id={comment._id} onClick={clickHandler} type="submit" color="secondary">
          <ChevronRightOutlinedIcon />
        </IconButton>
        {nestedComments}
        </Grid>
        </Grid>
      </div>
    )
}

export default CommentCard