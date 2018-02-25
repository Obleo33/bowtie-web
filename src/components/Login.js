import React from 'react';

class Login extends React.Component {
	constructor () {
		super()
		this.state = {
			data: {},
		}
	}

	submitLogin(e) {
		e.preventDefault();
		this.props.login(this.state.data)
		this.setState({ data: {} })
	}

	handleChange(e) {
		let input = e.target.id.replace('login-','')
		let updateData = Object.assign({}, this.state.data, {[input]: e.target.value})
    this.setState({ data: updateData });
	}

	render() {
		return (
			<div>
				<form>
					{ this.props.newUser && 
						<input id="login-name"
							 	 	 type="text" 
							 	 	 ref={(input) => { this.name = input }}
							 	 	 value={ this.state.data.name || ''} 
								 	 placeholder="type name"
							 	 	 onChange= { this.handleChange.bind(this) }
						/>
					}
					<input id="login-email"
								 type="text"
								 ref={(input) => { this.email = input }}
								 value={ this.state.data.email || ''} 
								 placeholder="type email"
								 onChange= { this.handleChange.bind(this) }
					/>
					<input id="login-password"
								 type="password" 
								 ref={(input) => { this.password = input }}
								 value={ this.state.data.password || ''} 
								 placeholder="type password"
								 onChange= { this.handleChange.bind(this) }
					/>
					<button id="login-submit"
									type="login-submit"
          				onClick={(e) => this.submitLogin(e)}
				  >Login</button>
				</form>
			</div>
		)

	}
}

export default Login;