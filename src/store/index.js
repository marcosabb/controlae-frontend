import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './ducks'
import rootSaga from './sagas'
import logger from './logger'

import history from 'routes/history'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history)
]

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(applyMiddleware(...middlewares), logger())
  : null

const store = createStore(rootReducer(history), enhancer)

sagaMiddleware.run(rootSaga)

export default store
