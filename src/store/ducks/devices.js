import Immutable from 'seamless-immutable'
import { createActions, createReducer } from 'reduxsauce'

const initialState = Immutable({
  data: [],
  loading: false
})

const { Types, Creators } = createActions({
  fetchDevicesRequest: [],
  fetchDevicesSuccess: ['devices'],
  fetchDevicesFailure: []
})

export const devices = createReducer(initialState, {
  [Types.FETCH_DEVICES_REQUEST]: state => (
    state.merge({ loading: true })
  ),

  [Types.FETCH_DEVICES_SUCCESS]: (state, { devices }) => (
    state.merge({
      data: devices,
      loading: false
    })
  ),

  [Types.FETCH_DEVICES_FAILURE]: state => (
    state.merge({ loading: false })
  )
})

export const DevicesTypes = Types
export const DevicesActions = Creators
