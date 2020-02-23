import Immutable from 'seamless-immutable'
import { createActions, createReducer } from 'reduxsauce'

const initialState = Immutable({
  data: [],
  selected: null,
  loading: false
})

const { Types, Creators } = createActions({
  fetchDevicesRequest: [],
  fetchDevicesSuccess: ['devices'],
  fetchDevicesFailure: [],

  showDeviceRequest: ['id'],
  showDeviceSuccess: ['device'],
  showDeviceFailure: [],

  createDeviceRequest: ['device'],
  createDeviceSuccess: [],
  createDeviceFailure: [],

  updateDeviceRequest: ['id', 'device'],
  updateDeviceSuccess: ['device'],
  updateDeviceFailure: [],

  deleteDeviceRequest: ['id'],
  deleteDeviceSuccess: ['id'],
  deleteDeviceFailure: []
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
  ),

  [Types.SHOW_DEVICE_REQUEST]: state => (
    state.merge({ loading: true })
  ),

  [Types.SHOW_DEVICE_SUCCESS]: (state, { device }) => (
    state.merge({
      selected: device,
      loading: false
    })
  ),

  [Types.SHOW_DEVICE_FAILURE]: state => (
    state.merge({ loading: false })
  ),

  [Types.CREATE_DEVICE_REQUEST]: state => (
    state.merge({ loading: true })
  ),

  [Types.CREATE_DEVICE_SUCCESS]: state => (
    state.merge({ loading: false })
  ),

  [Types.CREATE_DEVICE_FAILURE]: state => (
    state.merge({ loading: false })
  ),

  [Types.UPDATE_DEVICE_REQUEST]: state => (
    state.merge({ loading: true })
  ),

  [Types.UPDATE_DEVICE_SUCCESS]: (state, { device }) => (
    state.merge({
      data: state.data.map(item =>
        item._id === device._id
          ? { ...device }
          : item
      ),
      loading: false
    })
  ),

  [Types.UPDATE_DEVICE_FAILURE]: state => (
    state.merge({ loading: false })
  ),

  [Types.DELETE_DEVICE_REQUEST]: state => (
    state.merge()
  ),

  [Types.DELETE_DEVICE_SUCCESS]: (state, { id }) => (
    state.merge({
      data: state.data.filter(item => item._id !== id),
      loading: false
    })
  ),

  [Types.DELETE_DEVICE_FAILURE]: state => (
    state.merge()
  )
})

export const DevicesTypes = Types
export const DevicesActions = Creators
