import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignIn from 'pages/Auth/SignIn'
import SignUp from 'pages/Auth/SignUp'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}
