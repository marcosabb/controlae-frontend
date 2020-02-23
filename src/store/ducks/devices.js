import Immutable from 'seamless-immutable'
import { createActions, createReducer } from 'reduxsauce'

const initialState = Immutable({
  data: [],
  selected: null,
  loading: {
    fetch: false,
    show: false,
    create: false,
    update: false,
    delete: false
  }
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
    state.merge({ loading: { ...state.loading, fetch: true } })
  ),

  [Types.FETCH_DEVICES_SUCCESS]: (state, { devices }) => (
    state.merge({
      data: devices,
      loading: { ...state.loading, fetch: false }
    })
  ),

  [Types.FETCH_DEVICES_FAILURE]: state => (
    state.merge({ loading: { ...state.loading, fetch: false } })
  ),

  [Types.SHOW_DEVICE_REQUEST]: state => (
    state.merge({ loading: { ...state.loading, show: true } })
  ),

  [Types.SHOW_DEVICE_SUCCESS]: (state, { device }) => (
    state.merge({
      selected: device,
      loading: { ...state.loading, show: false }
    })
  ),

  [Types.SHOW_DEVICE_FAILURE]: state => (
    state.merge({ loading: { ...state.loading, show: false } })
  ),

  [Types.CREATE_DEVICE_REQUEST]: state => (
    state.merge({ loading: { ...state.loading, create: true } })
  ),

  [Types.CREATE_DEVICE_SUCCESS]: state => (
    state.merge({ loading: { ...state.loading, create: false } })
  ),

  [Types.CREATE_DEVICE_FAILURE]: state => (
    state.merge({ loading: { ...state.loading, create: false } })
  ),

  [Types.UPDATE_DEVICE_REQUEST]: state => (
    state.merge({ loading: { ...state.loading, update: true } })
  ),

  [Types.UPDATE_DEVICE_SUCCESS]: (state, { device }) => (
    state.merge({
      data: state.data.map(item =>
        item._id === device._id
          ? { ...device }
          : item
      ),
      loading: { ...state.loading, update: false }
    })
  ),

  [Types.UPDATE_DEVICE_FAILURE]: state => (
    state.merge({ loading: { ...state.loading, update: false } })
  ),

  [Types.DELETE_DEVICE_REQUEST]: state => (
    state.merge({ loading: { ...state.loading, delete: true } })
  ),

  [Types.DELETE_DEVICE_SUCCESS]: (state, { id }) => (
    state.merge({
      data: state.data.filter(item => item._id !== id),
      loading: { ...state.loading, delete: false }
    })
  ),

  [Types.DELETE_DEVICE_FAILURE]: state => (
    state.merge({ loading: { ...state.loading, delete: false } })
  )
})

export const DevicesTypes = Types
export const DevicesActions = Creators
