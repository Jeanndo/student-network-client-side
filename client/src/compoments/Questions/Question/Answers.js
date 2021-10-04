import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {Button} from "@material-ui/core";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  likeBtn:{
      marginLeft:'300px',
      padding:'10px',
  }
}));

const Answers =  ({question})=>{

  console.log("ANswer",question)
const classes  =useStyles();
const [user,setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))
    return (
        <>
          <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={user?.result?.familyName} src={user?.result?.imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={`${user?.result?.familyName} Postesd ${moment(question.createdAt).fromNow()}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
             {question.anwers}
              </Typography>
            </React.Fragment>
          }
        />
      
      </ListItem>
      <Button className={classes.likeBtn} size="small"  color="primary" onClick={()=>{}}>
      <ThumbUpAltIcon fontSize="small" color="primary"/>
        10
      </Button>
      <Divider variant="inset" component="li" />

    </List>
        </>
    )
}
export default Answers;