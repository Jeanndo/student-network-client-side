import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import Answers from "./Answers";
import { useDispatch } from "react-redux";
import {
  deleteQuestion,
  likeQuestion,
} from "../../../redux/actions/questions";

const QUESTION = ({ question, setCurrentId }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"))
  
  const dispatch = useDispatch();
  //  console.log("answer:",formData)

  const Likes = () => {
    if (question.likes.length > 0) {
      return question.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{question.likes.length > 2 ? `You and ${question.likes.length - 1} others` : `${question.likes.length} like${question.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{question.likes.length} {question.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (
    <Card className={classes.card}>
      <div>
        <Typography style={{ marginLeft: "50px" }} color="primary" variant="p">
          {`${question?.name} Postesd `}
          {moment(question.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        {(user?.result?.googleId===question.creator)&&(
           <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => setCurrentId(question._id)}
        >
          <EditIcon fontSize="default" color="primary" />
          Edit
        </Button>
        )}
      </div>
      <Typography style={{ marginLeft: "50px" }} color="primary" variant="p">
        {question.title}
      </Typography>
      <div className={classes.details}>{question.question}</div>
      <div>
        <img
          src={question.selectedFile}
          alt={question.title}
          className={classes.image}
        />
      </div>
      <div>
        <div className="Answers">
          <Answers question={question} />
        </div>
           </div>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likeQuestion(question._id))}
        >
           <Likes/>
        </Button>

       { (user?.result?.googleId===question.creator)&&(
          <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => dispatch(deleteQuestion(question._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
       )
        }
      </CardActions>
    </Card>
  );
};

export default QUESTION;
