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

  handleLogin(data) {
    fetch('http://localhost:3000/api/v1/users')
      .then(response => response.json())
      .then(users => this.setState({ userName: users }))
      .catch(error => console.log(error));
  }

  handleProjectClick() {

  }

  handeleTodo() {

  }

  render() {
    console.log(this.state.userName);
    return (
      <div className="App">
        <nav>
          <p>Please login to start tracking your todos</p>
          { !this.state.userName && <Login login={this.handleLogin.bind(this)}/>}
        </nav>
        <Projects handleProjectClick={this.handleProjectClick.bind(this)}/>
        <Todos handeleTodo={this.handeleTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;






  

