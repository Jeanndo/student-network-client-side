import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import moment from "moment";
import {answerQuestion} from "../../../redux/actions/questions";
import {TextField} from "@material-ui/core";
import useStyles from "./styles";



// const answerref = useRef()

// //inside a function 

// answerref.current.scrollIntoView({behaviour:'smooth'})
// <div ref={answerref}/>

const Answers = ({ question }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  const [answers, setAnswers] = React.useState([question?.answers]);
  const [answer, setAnswer] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    Clear();
    const finalComment=`${user?.result?.name}: ${answer}`
    const newAnswers= await dispatch(answerQuestion(finalComment,question._id));
    setAnswers(newAnswers)
    
  };
  const Clear = () => {
    setAnswer('');
  };
// console.log("questionId",question._id)
  return (
    <>
      {answers?.map((answer,index)=>(
        <List className={classes.root}>
        <ListItem alignItems="flex-start" key={index}>
          <ListItemText
            primary="ANSWERS"
            secondary={
              <React.Fragment>
                
                <Typography
                component="div"
                  variant="body2"
                 style={{display:'block'}}
                  color="textPrimary"
                >
                 {/* <strong>{answer.split(': ')[0]}</strong>
                 {answer.split(':')[1]} */}
                 {answer}
                </Typography>
              
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
      ))}
      <div>
      {(user)&&(
        <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
        >
        <TextField
          variant="outlined"
          label="Answer"
          fullWidth
          multiline
          rows={4}
          value={answer}
          onChange={(event) =>setAnswer(event.target.value)}
        />
        <Button
          className={classes.postAnswer}
          variant="outlined"
          color="primary"
          size="small"
          type="submit"
          disabled = {!answer}
        >
          Post Answer
        </Button>
        </form>
      )}
     </div>
    </>
  );
};
export default Answers;
