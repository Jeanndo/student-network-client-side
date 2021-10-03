import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import StudentQuestions from "../../Images/student.png";
import Form from "../Form/Form";
import QUESTIONS from "../Questions/Questions";
import useStyles from "../../styles";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../redux/actions/questions";
import Darktheme from "react-dark";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    dispatch(getQuestions());
  }, [currentId, dispatch]);

  return (
    <div max-width="lg">
      <AppBar
        className={classes.appBar}
        position="static"
        color="inherit"
        elevation={0}
      >
        <Typography className={classes.heading} variant="h6" align="center">
          Student Connection
        </Typography>
        <img
          className={classes.image}
          src={StudentQuestions}
          alt="student-connect"
          height="60"
        />
        <Darktheme />

        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </AppBar>

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
