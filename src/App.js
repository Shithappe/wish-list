import './App.css';

import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import Home from './components/Home.js'
import Wish from './components/Wish.js'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div>
        <Switch>
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/awd' component={Wish} />
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
