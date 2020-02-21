import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { auth } from './auth'
import { devices } from './devices'

const rootReducer = history => combineReducers({
  auth,
  devices,
  router: connectRouter(history)
})

export default rootReducer
