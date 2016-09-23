import Immutable from 'immutable'
import {
  TRAY_ADDED,
  REMOVE_TRAY,
  ENCRYPTING_PASSWORD,
  PASSWORD_ENCRYPTED,
  PASSWORD_ENCRYPT_ERROR,
  PROJECTS_FETCHING,
  PROJECTS_FETCH_ERROR,
  PROJECTS_FETCHED,
  UPDATING_TRAY
} from '../actions/TrackingActions'
import {INITIALISED} from '../actions/NevergreenActions'

const DefaultState = Immutable.Map()

export function reduce(state = DefaultState, action) {
  switch (action.type) {
    case INITIALISED:
      return state.merge(action.data.get('trays')).map((tray) => tray.set('loaded', true))

    case TRAY_ADDED:
      return state.set(action.trayId, action.data)

    case REMOVE_TRAY:
      return state.delete(action.trayId)

    case ENCRYPTING_PASSWORD:
    case PROJECTS_FETCHING:
      return state.update(action.trayId, (tray) => tray.set('loaded', false))

    case PASSWORD_ENCRYPTED:
      return state.update(action.trayId, (tray) =>
        tray.set('loaded', true).set('password', action.password).delete('errors'))

    case PROJECTS_FETCHED:
      return state.update(action.trayId, (tray) => tray.set('loaded', true).delete('errors'))

    case PASSWORD_ENCRYPT_ERROR:
    case PROJECTS_FETCH_ERROR:
      return state.update(action.trayId, (tray) => tray.merge({loaded: true, errors: action.errors}))

    case UPDATING_TRAY:
      return state.update(action.trayId, (tray) => tray.merge(action.data))

    default:
      return state
  }
}