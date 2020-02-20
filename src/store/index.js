import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks'
import rootSaga from './sagas'
import logger from './logger'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware
]

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(applyMiddleware(...middlewares), logger())
  : null

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
