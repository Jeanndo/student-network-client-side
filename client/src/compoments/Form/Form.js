import React,{useState,useEffect}from 'react';
import useStyles from './styles';
import { TextField,Button,Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch,useSelector } from 'react-redux';
import { createQuestions,updateQuestion} from '../../redux/actions/questions';


const Form = ({currentId,setCurrentId})=>{
    
 const classes = useStyles();
 const dispatch = useDispatch();
 const user= JSON.parse(localStorage.getItem('profile'))

 const question = useSelector((state)=>currentId?state.questions.find((q)=>q._id===currentId):null);

 const[postData,setPostData] = useState({creator:'',title:'',question:'',selectedFile:''})

 const handleSubmit =  (event)=>{

    event.preventDefault();

    if(currentId){
    dispatch(updateQuestion(currentId,postData))
    }else{
    dispatch(createQuestions(postData))
    }
  
    Clear()

 }

useEffect(()=>{

    if(question) setPostData(question);  

},[question]);

const Clear = ()=>{
    setCurrentId(null);

    setPostData({creator:'',title:'',question:'',selectedFile:''});
  
}

    return (
        <>
        {user?(
            <Paper className={`${classes.paper } form-paper`} elevation={0}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography variant="h6">{currentId?'Editing a question':'Creating a Question'}</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator"
                fullWidth 
                value={postData.creator}
                onChange = {(event)=>setPostData({...postData,creator:event.target.value})}
                />

                <TextField 
                name="title" 
                variant="outlined" 
                label="Title"
                fullWidth 
                value={postData.title}
                onChange = {(event)=>setPostData({...postData,title:event.target.value})}
                />
                <TextField 
                name="question" 
                variant="outlined" 
                label="Question"
                fullWidth 
                value={postData.question}
                onChange = {(event)=>setPostData({...postData,question:event.target.value})}
                />
                <div className={classes.fileInput}>
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone ={({base64})=>setPostData({...postData,selectedFile:base64})}
                />
                </div>

                <Button variant="contained" color="primary" size="large" type="submit" fullWidth className={classes.buttonSubmit}>Post</Button>
                <Button variant="contained" color="secondary" size="small" onClick={Clear} fullWidth className={classes.buttonSubmit}>Clear</Button>
            </form>
            </Paper>
        ):(
         <>
          <Typography variant="h6"color="primary">Please Login to have full access</Typography>
         </>
        )
           
        }
        </>
    )
}

export default Form;