import React from 'react'
import t from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import store from 'store'

export default function PrivateRoute ({ component: Component, ...rest }) {
  const { authenticated } = store.getState().auth

  return (
    <Route
      render={props => (
        !authenticated
          ? <Component {...props} />
          : (
            <Redirect to={{
              pathname: '/devices',
              state: { from: props.location }
            }}
            />
          )
      )}
      {...rest}
    />
  )
}

PrivateRoute.propTypes = {
  component: t.oneOfType([t.element, t.func, t.object]).isRequired,
  location: t.shape()
}
