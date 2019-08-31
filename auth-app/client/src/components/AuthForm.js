import React, { Component } from 'react';

class AuthForm extends Component {
	state = { email: '', password: '' };

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	render() {
		return (
			<div className="row">
				<form className="col s6" onSubmit={this.handleSubmit}>
					<div className="input-field">
						<input
							type="email"
							name="email"
							onChange={this.handleInputChange}
							value={this.state.email}
							placeholder="Email"
							required
						/>
					</div>
					<div className="input-field">
						<input
							type="password"
							name="password"
							onChange={e => this.handleInputChange(e)}
							value={this.state.password}
							placeholder="password"
							required
						/>
					</div>
					<button className="btn">Submit</button>
				</form>
			</div>
		);
	}
}

export default AuthForm;
