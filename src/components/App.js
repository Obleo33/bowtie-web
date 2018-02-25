import React, { Component } from 'react';
import '../styles/App.css';
import Login from './Login'
import Projects from './Projects'
import Todos from './Todos'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {},
      projects:[{ id: 1, name: 'one' }, { id: 2, name:'two' }],
      todos:[{ id: 1, name: 'one', description: 'do some stuff' }, { id: 2, name:'two', description: 'do some stuff' }],
      newUser: false,
    }
  }


  handleLogin(data) {
    fetch(`http://localhost:3000/api/v1/users/${data.id}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
      .catch(error => console.log(error));
  }

  getProject(project){

  }

  getTodo(project) {

  }

  newUser() {
    this.setState({ newUser: !this.state.newUser })
  }

  // fetch all projects where user = key
  // fetch all todos where projects = key

  handleProject(e) {
    console.log(this);
  }

  renderLogin() {
    return(
      <div className="login-container">
        <Login login={this.handleLogin.bind(this)} newUser={this.state.newUser}/>
        <div onClick={this.newUser.bind(this)} >Sign up</div>
      </div>
    )
  }

  handeleTodo() {

  }

  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <nav>
          <h1>DOList</h1>
          <p>Please login to start tracking your todos</p>
          { !this.state.user.name && this.renderLogin()}
        </nav>
        { this.state.projects.map(project => <Projects key={"project-" + project.id}project={ project } handleProject={this.handleProject.bind(this)}/>)}
        { this.state.todos.map(todo => <Todos key={"todo-" + todo.id} todo={ todo } handeleTodo={this.handeleTodo.bind(this)}/>)}
      </div>
    );
  }
}

export default App;






  

