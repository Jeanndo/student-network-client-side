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

 const[postData,setPostData] = useState({title:'',question:'',selectedFile:''})

 const handleSubmit =  (event)=>{

    event.preventDefault();

    if(currentId){
    dispatch(updateQuestion(currentId,{...postData,name:user?.result?.names}))
    }else{
    dispatch(createQuestions({...postData,name:user?.result?.name}))
    }
  
    Clear()

 }

useEffect(()=>{
if(question) setPostData(question);  
},[question]);

const Clear = ()=>{
    setCurrentId(null);

    setPostData({title:'',question:'',selectedFile:''});
}

if(!user?.result?.name){
    return (
        <Paper className={classes.paper} style={{marginTop:'100px',width:'300px',color:'blue'}}>
         <Typography variant="h6" align="center">
          Please sign in to ask,asnwer and like others questions.
         </Typography>
        </Paper>
    )
}
    return (
     
            <Paper className={`${classes.paper } form-paper`} elevation={0}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography variant="h6">{currentId?'Editing a question':'Creating a Question'}</Typography>
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
                multiline
                rows={5}
                fullWidth 
                value={postData.question}
                onChange = {(event)=>setPostData({...postData,question:event.target.value})}
                />
                <div className={classes.fileInput} >
                <FileBase 
                  style={{cursor:'pointer'}}
                    type="file"
                    multiple={false}
                    onDone ={({base64})=>setPostData({...postData,selectedFile:base64})}
                />
                </div>

                <Button variant="contained" color="primary" size="large" type="submit" fullWidth className={classes.buttonSubmit}>Post</Button>
                <Button variant="contained" color="secondary" size="small" onClick={Clear} fullWidth className={classes.buttonSubmit}>Clear</Button>
            </form>
            </Paper>
    )
}

export default Form;