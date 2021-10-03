import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from '../compoments/Home/Home';
import GoogleLogin from '../compoments/Auth/GoogleLogin'

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/login" component={GoogleLogin}/>
          </Switch>
        </Router>
      );
    }
  }
  export default Routes;