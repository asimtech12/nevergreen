import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Clipboard from './Clipboard'
import styles from './locally.scss'

class Locally extends Component {
  copySuccess = () => {
    this.props.exportSuccess(['Successfully copied to clipboard'])
  }

  copyError = () => {
    this.props.exportError(['Unfortunately your browser doesn\'t support automatically copying to clipboard, please manually copy'])
  }

  render() {
    return (
      <Fragment>
        <label>
          <span className={styles.label}>current configuration</span>
          <textarea className={styles.data}
                    id='export-data'
                    value={this.props.configuration}
                    readOnly
                    spellCheck='false'
                    data-locator='export-data'/>
        </label>
        <Clipboard elementSelector='#copy-to-clipboard' onSuccess={this.copySuccess} onError={this.copyError}/>
        <button className={styles.copy} id='copy-to-clipboard' data-clipboard-target='#export-data'>
          copy to clipboard
        </button>
      </Fragment>
    )
  }
}

Locally.propTypes = {
  loaded: PropTypes.bool,
  configuration: PropTypes.string.isRequired,
  exportSuccess: PropTypes.func.isRequired,
  exportError: PropTypes.func.isRequired
}

export default Locally
