import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import SignIn from 'pages/Auth/SignIn'
import SignUp from 'pages/Auth/SignUp'
import Devices from 'pages/Devices'

import history from './history'

export default function Routes () {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/devices' component={Devices} exact />
      </Switch>
    </ConnectedRouter>
  )
}
