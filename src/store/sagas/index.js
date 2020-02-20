import { all } from 'redux-saga/effects'

import auth from './auth'

function * rootSaga () {
  return yield all([
    auth
  ])
}

export default rootSaga
