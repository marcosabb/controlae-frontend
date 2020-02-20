import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from 'services/api'

import { AuthTypes, AuthActions } from '../ducks/auth'

function * signIn ({ email, password }) {
  try {
    const { data } = yield call(api.post, 'sessions', {
      email,
      password
    })

    const { user, token } = data

    yield put(AuthActions.signInSuccess(user, token))

    localStorage.setItem('@controlae:user', JSON.stringify(user))
    localStorage.setItem('@controlae:token', token)
  } catch (error) {
    yield put(AuthActions.signInFailure())

    toast.error(
      'Falha ao realizar o login, verifique seus dados e tente novamente.'
    )
  }
}

function * signUp ({ email, password }) {
  try {
    yield call(api.post, 'users', {
      email,
      password
    })

    yield put(AuthActions.signUpSuccess())
  } catch (error) {
    yield put(AuthActions.signUpFailure())

    toast.error(
      'Falha ao realizar o cadastro, verifique seus dados e tente novamente.'
    )
  }
}

function signOut () {
  localStorage.removeItem('@controlae:user')
  localStorage.removeItem('@controlae:token')
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
  takeLatest(AuthTypes.SIGN_OUT, signOut)
])
