import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'

const initialState = Immutable({
  user: JSON.parse(localStorage.getItem('@controlae:user')) || null,
  token: localStorage.getItem('@controlae:token') || null,
  authenticated: !!localStorage.getItem('@controlae:user'),
  loading: false
})

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['user', 'token'],
  signInFailure: [],

  signUpRequest: ['email', 'password'],
  signUpSuccess: ['user', 'token'],
  signUpFailure: [],

  signOut: []
})

export const auth = createReducer(initialState, {
  [Types.SIGN_IN_REQUEST]: state => (
    state.merge({ loading: true })
  ),

  [Types.SIGN_IN_SUCCESS]: (state, { user, token }) => (
    state.merge({
      user,
      token,
      authenticated: true,
      loading: false
    })
  ),

  [Types.SIGN_IN_FAILURE]: state => (
    state.merge({ loading: false })
  ),

  [Types.SIGN_UP_REQUEST]: state => (
    state.merge({ loading: true })
  ),

  [Types.SIGN_UP_SUCCESS]: state => (
    state.merge({ loading: false })
  ),

  [Types.SIGN_UP_FAILURE]: state => (
    state.merge({ loading: false })
  ),

  [Types.SIGN_OUT]: state => (
    state.merge({
      user: null,
      token: null,
      authenticated: false
    })
  )
})

export const AuthTypes = Types
export const AuthActions = Creators
