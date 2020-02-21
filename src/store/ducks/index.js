import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { auth } from './auth'

const rootReducer = history => combineReducers({
  auth,
  router: connectRouter(history)
})

export default rootReducer
