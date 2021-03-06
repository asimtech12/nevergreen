import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  setBrokenBuildSoundFx,
  setPlayBrokenBuildSoundFx,
  setRefreshTime,
  setShowBuildTime,
  setShowBrokenBuildTime,
  setShowBuildLabel,
  setShowTrayName,
  VALID_REFRESH_TIMES
} from '../actions/SettingsActionCreators'
import Settings from './Settings'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setShowBuildTime,
    setShowBrokenBuildTime,
    setPlayBrokenBuildSoundFx,
    setBrokenBuildSoundFx,
    setShowTrayName,
    setRefreshTime,
    setShowBuildLabel
  }, dispatch)
}

function mapStateToProps(store) {
  const audioVisual = store.get('audioVisual')
  return {
    showTrayName: audioVisual.get('showTrayName'),
    showBuildTime: audioVisual.get('showBuildTime'),
    showBrokenBuildTime: audioVisual.get('showBrokenBuildTime'),
    playBrokenBuildSoundFx: audioVisual.get('playBrokenBuildSoundFx'),
    showBuildLabel: audioVisual.get('showBuildLabel'),
    brokenBuildSoundFx: audioVisual.get('brokenBuildSoundFx'),
    setShowTrayName: audioVisual.get('setShowTrayName'),
    refreshTime: audioVisual.get('refreshTime'),
    validRefreshTimes: VALID_REFRESH_TIMES
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
