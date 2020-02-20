import { all } from 'redux-saga/effects'

function * rootSaga () {
  return yield all([
    function hello () {}
  ])
}

export default rootSaga
