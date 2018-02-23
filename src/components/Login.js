import React from 'react';

class Login extends React.Component {
	constructor () {
		super()
		this.state = {
			data: {},
			new: false,
		}
	}

	submitLogin(e, loginData) {
		e.preventDefault();
		this.props.login(loginData)
		this.setState({ data: {} })
	}

	handleChange(e) {
		let updateData = Object.assign({}, this.state.data, {[e.target.id]: e.target.value})
    this.setState({ data: updateData });
	}

	render() {
		return (
			<div>
				<form>
					{ this.state.new && 
							<input id="name"
									 	 type="text" 
									 	 ref={(input) => { this.name = input }}
									 	 value={ this.state.data.name || ''} 
										 placeholder="type name"
									 	 onChange= { this.handleChange.bind(this) }
							/>
					}
					<input id="email"
								 type="text"
								 ref={(input) => { this.email = input }}
								 value={ this.state.data.email || ''} 
								 placeholder="type email"
								 onChange= { this.handleChange.bind(this) }
					/>
					<input id="password"
								 type="password" 
								 ref={(input) => { this.password = input }}
								 value={ this.state.data.password || ''} 
								 placeholder="type password"
								 onChange= { this.handleChange.bind(this) }
					/>
					<button type="submit"
          				onClick={(e) => this.submitLogin(e, {
          					email: this.email.value,
          					password: this.password.value,
          				})}
				  >Login</button>
				</form>
			</div>
		)

	}
}

export default Login;