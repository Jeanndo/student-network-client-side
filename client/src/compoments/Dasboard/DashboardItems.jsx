import React from "react";
import useStyles from "./Questions/Question/styles";
import { Card, CardActions, Button, Grid, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import Answers from "./Questions/Question/Answers";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion, likeQuestion } from "../../redux/actions/questions";
import { getQuestions } from "../../redux/actions/questions";

const DashboardItems = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const questions = useSelector((state) => state.questions);
  const user = JSON.parse(localStorage.getItem("profile"));

  console.log(questions);

  return (
    <>
      {questions.map((question) => (
        <Grid item key={question._id}xs={12} elevation={0}>
          <Card className={classes.card}>
            <div>
              <Typography
                style={{ marginLeft: "50px" }}
                color="primary"
                variant="p"
              >
                {`${question?.name} Postesd `}
                {moment(question.createdAt).fromNow()}
              </Typography>
            </div>
            <Typography
              style={{ marginLeft: "50px" }}
              color="primary"
              variant="p"
            >
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
                Likes
              </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  onClick={() => dispatch(deleteQuestion(question._id))}
                >
                  <DeleteIcon fontSize="small" />
                  Delete
                </Button>
              
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default DashboardItems;
