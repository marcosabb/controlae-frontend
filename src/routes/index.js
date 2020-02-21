import React from 'react'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Guest from './guest'
import Private from './private'

import SignIn from 'pages/Auth/SignIn'
import SignUp from 'pages/Auth/SignUp'
import Devices from 'pages/Devices'

import history from './history'

export default function Routes () {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Guest path='/signin' component={SignIn} />
        <Guest path='/signup' component={SignUp} />

        <Private path='/devices' component={Devices} exact />
      </Switch>
    </ConnectedRouter>
  )
}
