import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import oreoWeb from './component/oreoWeb'
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/oreo" component={oreoWeb}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
