import React, { useState, useEffect } from "react";
import { Container,Grow, Grid } from "@material-ui/core";
import Form from "../Form/Form";
import QUESTIONS from "../Questions/Questions";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../redux/actions/questions";
import Navbar from "../Navbar/Navbar";

export const Home = () => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  // console.log(user?.result?.name)
  useEffect(() => {
    dispatch(getQuestions());
  }, [currentId, dispatch]);


  return (
    <div max-width="lg">
      <Navbar/>
      <Grow in id="root">
        <Container className="question-container">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={0}
            elevation={0}
          >
            <Grid item xs={12} sm={7} className="scrollable" elevation={0}>
              <QUESTIONS setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4} className="form-position" elevation={0}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};
