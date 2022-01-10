import './App.css';

import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import Home from './components/Home.js'
import Auth from './components/Auth.js'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div>
        <Switch>
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/auth' component={Auth} />
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
