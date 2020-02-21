import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from 'services/api'

import { DevicesTypes, DevicesActions } from '../ducks/devices'

const devices = {
  Televisão: {
    label: 'TV',
    gradient: '#1e3c72, #2a5298'
  },
  Ventilador: {
    label: 'VT',
    gradient: '#48b1bf, #06beb6'
  },
  'Ar condicionado': {
    label: 'AC',
    gradient: '#eb3349, #f45c43'
  }
}

function * fetchDevices () {
  try {
    const response = yield call(api.get, 'dashboard/devices')

    const data = response.data.map(item => ({
      ...item,
      label: devices[item.type].label,
      gradient: devices[item.type].gradient
    }))

    yield put(DevicesActions.fetchDevicesSuccess(data))
  } catch (error) {
    yield put(DevicesActions.fetchDevicesFailure())

    toast.error('Falha ao buscar seus dispositivos, tente novamente.')
  }
}

export default all([
  takeLatest(DevicesTypes.FETCH_DEVICES_REQUEST, fetchDevices)
])
