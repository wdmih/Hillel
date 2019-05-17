import React, { Component } from 'react';
import './App.css';
import Spinner from './Spinner'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      loading: false,
    }
  }
  componentDidMount(){
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false})
    }, 3000);
  }
  render() {
    let {loading} = this.state
    return (
      <div className="App">
        {loading ? <Spinner text="loading"/> : <h1>SOMETHING LOADED</h1>}
      </div>
    );
  }
}

export default App;
