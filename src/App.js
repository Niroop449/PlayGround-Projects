import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {title:'',}
  }
  handleChange(event){
    this.setState({title:event.target.value})
  }
  render() {
    return (
      <div>
          <input type="text" onChange={this.handleChange.bind(this)}/>
          <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default App;
