import React, {Component} from 'react'

export default class Input extends Component {
  render(){
    let {type, placeholder, eventHandler} = this.props
    return (
      <input
        type={type}
        placeholder={placeholder}
        onInput={(e)=> eventHandler(e.target.value)}
        />
    )
  }
}