import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import styles from './checkbox.scss'

class Checkbox extends Component {
  onChange = (evt) => {
    this.props.onToggle(evt.target.checked)
  }

  render() {
    const classes = classNames(styles.checkbox, this.props.className)
    const inputProps = _.omit(this.props, ['children', 'onToggle', 'className'])
    const id = _.uniqueId()

    return (
      <div className={classes}>
        <input id={id}
               className={styles.input}
               type='checkbox'
               onChange={this.onChange}
               {...inputProps}
               aria-disabled={this.props.disabled}/>
        <label htmlFor={id} className={styles.children}>{this.props.children}</label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export default Checkbox
