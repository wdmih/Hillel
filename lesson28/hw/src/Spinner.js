import React, {Component} from 'react'
import './Spinner.css'

export default class Spinner extends Component {
  render () {
    return (
      <p className='loading'>
        <span>{this.props.text}</span>
      </p>
    )
  }
}