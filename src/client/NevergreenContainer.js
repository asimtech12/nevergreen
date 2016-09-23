import Immutable from 'immutable'
import {connect} from 'react-redux'
import {initalise, showKeyboardShortcuts, dismiss, checkForNewVersion} from './actions/NevergreenActions'
import Nevergreen from './Nevergreen'
import Package from '../../package'

function mapDispatchToProps(dispatch) {
  return {
    initalise() {
      return dispatch(initalise())
    },
    checkForNewVersion(version) {
      dispatch(checkForNewVersion(version, window.location.hostname))
    },
    dismiss() {
      dispatch(dismiss())
    },
    showKeyboardShortcuts() {
      dispatch(showKeyboardShortcuts())
    }
  }
}

function mapStateToProps(store) {
  return Immutable.Map({
    loaded: store.get('nevergreen').get('loaded'),
    versionNumber: Package.version,
    versionName: Package.versionName,
    versionColour: Package.versionColour,
    versionMeta: Package.versionMeta,
    commitHash: Package.commitHash
  }).toJS()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nevergreen)