import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignIn from 'pages/Authentication/SignIn'
import SignUp from 'pages/Authentication/SignUp'

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
