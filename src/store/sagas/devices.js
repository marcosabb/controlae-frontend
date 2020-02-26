import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { push } from 'connected-react-router'

import api from 'services/api'

import { DevicesTypes, DevicesActions } from '../ducks/devices'

function * fetchDevices () {
  const label = {
    Televisão: 'TV',
    Ventilador: 'VT',
    'Ar condicionado': 'AC'
  }

  try {
    const response = yield call(api.get, 'dashboard/devices')

    const data = response.data.map(item => ({
      ...item,
      label: label[item.type]
    }))

    yield put(DevicesActions.fetchDevicesSuccess(data))
  } catch (error) {
    yield put(DevicesActions.fetchDevicesFailure())

    toast.error('Falha ao buscar seus dispositivos, tente novamente.')
  }
}

function * showDevice ({ id }) {
  try {
    const response = yield call(api.get, `dashboard/devices/${id}`)

    const [device] = response.data.map(device => ({
      ...device,
      type: { label: device.type, value: device.type }
    }))

    yield put(DevicesActions.showDeviceSuccess(device))
  } catch (error) {
    yield put(DevicesActions.showDeviceFailure())

    toast.error('Falha ao buscar dispositivo, tente novamente.')
  }
}

function * createDevice ({ device }) {
  const order = {
    Televisão: 1,
    'Ar condicionado': 2,
    Ventiladaor: 3
  }

  try {
    const { type, brand, control } = device

    yield call(api.post, 'dashboard/devices', {
      type,
      brand,
      control,
      order: order[type]
    })

    yield put(DevicesActions.createDeviceSuccess())

    yield put(push('devices'))
  } catch (error) {
    yield put(DevicesActions.createDeviceFailure())

    toast.error('Falha ao criar dispositivo, tente novamente.')
  }
}

function * updateDevice ({ id, device }) {
  try {
    const { type, brand, control, order } = device

    const { data } = yield call(api.put, `dashboard/devices/${id}`, {
      type,
      brand,
      control,
      order
    })

    yield put(DevicesActions.updateDeviceSuccess(data))

    toast.success('Dispositivo atualizado com sucesso!')
  } catch (error) {
    yield put(DevicesActions.updateDeviceFailure())

    toast.error('Falha ao atualizar dispositivo, tente novamente.')
  }
}

function * deleteDevice ({ id }) {
  try {
    yield call(api.delete, `dashboard/devices/${id}`)

    yield put(DevicesActions.deleteDeviceSuccess(id))
  } catch (error) {
    yield put(DevicesActions.deleteDeviceFailure())

    toast.error('Falha ao excluir dispositivo, tente novamente.')
  }
}

export default all([
  takeLatest(DevicesTypes.FETCH_DEVICES_REQUEST, fetchDevices),
  takeLatest(DevicesTypes.SHOW_DEVICE_REQUEST, showDevice),
  takeLatest(DevicesTypes.CREATE_DEVICE_REQUEST, createDevice),
  takeLatest(DevicesTypes.UPDATE_DEVICE_REQUEST, updateDevice),
  takeLatest(DevicesTypes.DELETE_DEVICE_REQUEST, deleteDevice)
])
