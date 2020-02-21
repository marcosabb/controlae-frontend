import { all } from 'redux-saga/effects'

import auth from './auth'
import devices from './devices'

function * rootSaga () {
  return yield all([
    auth,
    devices
  ])
}

export default rootSaga
