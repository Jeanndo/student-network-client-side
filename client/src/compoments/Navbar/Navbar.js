import React from 'react'
import Darktheme from "react-dark";
import {AppBar, Typography} from "@material-ui/core";
import StudentQuestions from "../../Images/student.png";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {Avatar,Button}from '@material-ui/core';
import useStyles from "../../styles";
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const classes = useStyles();
    const history=useHistory()
    const [value, setValue] = React.useState(0);
    const [user,setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))

     React.useEffect(()=>{
        const token = user?.token
        setUser(JSON.parse(localStorage.getItem('profile')))
     },[])

     const handleSignIn = ()=>{
        history.push('/login')
     }
     const handleLogout = ()=>{
      localStorage.clear()
    }

     
    return (
        <div>
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
        {user&&(<>
        <Avatar alt={user?.result?.familyName} src={user?.result?.imageUrl} />
        <Typography style={{color:'blue'}}>
         {user?.result?.familyName}
        </Typography>
        </>
        )}
        <Typography style={{marginLeft:'100px'}}>
        {/* <Darktheme /> */}
        </Typography>
        {!user?(
        <Button variant="outlined" color="primary" onClick={handleSignIn} style={{marginLeft:'200px'}}>
        SignIn
        </Button>
        ):(
            <Button variant="outlined" color="secondary"onClick={handleLogout} style={{marginLeft:'200px'}}> 
              Logout
          </Button>
        )
        }
      </AppBar>
        </div>
    )
}

export default Navbar
