import React, { Component } from 'react';
import './App.css';

import Input from './components/Input'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      testString: '',
      pattern: '',
      flags: '',
      matched: Boolean,
      matchRes: []
    }
    this.setTestString = this.setTestString.bind(this)
    this.setRegexPattern = this.setRegexPattern.bind(this)
    this.setRegexFlages = this.setRegexFlages.bind(this)
    this.matchRegex = this.matchRegex.bind(this)
  }
  setTestString(val) {
    this.setState({testString: val})
  }
  setRegexPattern(val){
    this.setState({pattern: val})
  }
  setRegexFlages(val){
    this.setState({flags: val})
  }
  matchRegex(){
    let regex = new RegExp(this.state.pattern, this.state.flags)
    this.setState({
      matched: regex.test(this.state.testString),
      matchRes: this.state.testString.match(regex)
    })
  }
  render() {
    return (
      <div className="App">
        <Input
          type="text"
          placeholder="String"
          eventHandler={this.setTestString}
        />
        <Input
          type="text"
          placeholder="Regex pattern"
          eventHandler={this.setRegexPattern}
        />
        <Input
          type="text"
          placeholder="Regex flags"
          eventHandler={this.setRegexFlages}
        />
        <button onClick={this.matchRegex}>Match</button>
        <span className={this.state.matched ? 'success': 'error'}>{this.state.matched ? 'OK': 'ERROR'}</span>
        <p>Finded:</p>
        <p>{this.state.matchRes.map((item, index) => (
          <span key={index}>"{item}"</span>
        ))}</p>
      </div>
    );
  }
}

export default App;
