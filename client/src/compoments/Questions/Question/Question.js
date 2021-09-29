import React from 'react';
import useStyles from './styles';
import { Card,CardActions,CardMedia,Button,Typography,TextField} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import Answers from './Answers';
import {useDispatch} from 'react-redux';
import { deleteQuestion,likeQuestion} from '../../../redux/actions/questions';


const QUESTION = ({question,setCurrentId})=>{

const classes = useStyles();

const dispatch = useDispatch();

const handleSubmit = (event)=>{
    event.preventDefault();
    Clear()
}
 const Clear = ()=>{

 }
    return (
       <Card className={classes.card}>
           <div>
               <Typography style={{marginLeft:'50px'}} color="primary" variant="p">{`${question.creator} Postesd `}{moment(question.createdAt).fromNow()}</Typography>
           </div>
           <div className={classes.overlay2}>
               <Button size="small" color="primary" onClick={()=>setCurrentId(question._id)}>
                   <EditIcon fontSize="default" color="primary"/>
                    Edit
               </Button>

           </div>
            <Typography style={{marginLeft:'50px'}} color="primary" variant="p">{question.title}</Typography>
           <div className={classes.details}>
             {question.question}
           </div>
           <div >
               <img src={question.selectedFile} alt={question.title} className={classes.image}/>
           </div>
           <div >

            <div className="Answers">
              <Answers/>
            </div>
           <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

            <TextField 
            name="Answer" 
            variant="outlined" 
            label="Answer"
            fullWidth 
            />

            <Button className={classes.postAnswer}variant="contained" color="primary" size="small" type="submit" >Post</Button>
            </form> 

           </div>

           <CardActions className={classes.cardActions}>
               <Button size="small" color="primary" onClick={()=>dispatch(likeQuestion(question._id))}>
                   <ThumbUpAltIcon fontSize="small"/>
                   Like {question.likeCount}
                   </Button>
                   <Button size="small" color="primary" onClick={()=>dispatch(deleteQuestion(question._id))}>
                   <DeleteIcon fontSize="small"/>
                      Delete
                   </Button>
           </CardActions>
       </Card>
    )
}

export default QUESTION;