import React from 'react';
import QUESTION from './Question/Question';
import useStyles from './styles';
import LinearProgress from '@material-ui/core/LinearProgress';  
import {useSelector} from 'react-redux';
import {Grid} from "@material-ui/core";

const QUESTIONS = ({setCurrentId})=>{ 
const classes = useStyles();

const questions = useSelector((state)=>state.questions);

console.log(questions);
    return (
        !questions?.length? <LinearProgress/>:(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {questions.map((question)=>(
                <Grid key={question._id} item xs={12} elevation={0}>
                  <QUESTION question={question} setCurrentId={setCurrentId}/>
                </Grid>
            ))}
            </Grid>
        )
    )
}

export default QUESTIONS;