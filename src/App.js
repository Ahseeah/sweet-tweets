import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SignIn from './components/SignIn'
import TroopForm from './components/TroopForm'
import SuccessPage from './components/SuccessPage'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/troop-form" component={TroopForm} />
            <Route exact path="/success-page" component={SuccessPage} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
