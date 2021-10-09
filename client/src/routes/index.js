import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from '../compoments/Home/Home';
import GoogleLogin from '../compoments/Auth/GoogleLogin'
import Dashoard from '../compoments/Dasboard/Dashoard';

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/login" component={GoogleLogin}/>
           <Route exact path="/dashboard" component={Dashoard}/>
          </Switch>
        </Router>
      );
    }
  }
  export default Routes;