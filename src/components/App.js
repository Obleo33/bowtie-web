import React, { Component } from 'react';
import '../styles/App.css';
import Login from './Login'
import Projects from './Projects'
import Todos from './Todos'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userName:'',
      projects:'',
      todos:'',
    }
  }

  handleLogin() {
    
  }

  handleProjectClick() {

  }

  handeleTodo() {

  }

  render() {
    return (
      <div className="App">
        <nav>
          <p>Please login to start tracking your todos</p>
          <Login handleLogin={this.handleLogin.bind(this)}/>
        </nav>
        <Projects handleProjectClick={this.handleProjectClick.bind(this)}/>
        <Todos handeleTodo={this.handeleTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
