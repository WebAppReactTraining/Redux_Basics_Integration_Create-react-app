import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginPage extends Component{
	handleSubmit = values =>  {

	}
	render(){
		const { handleSubmit } = this.props;
		return(
				<div>
					<h1>Login</h1>
					<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">UserName</label>
						<Field name="username" component="input" type="text" />
						</div>
						<div>
						<label htmlFor="password">Password</label>
						<Field name="password" component="input" type="password" />
					</div>
					<button type="submit">Submit</button>
					</form>
				</div>
			);
	}
}
LoginPage=reduxForm({
	form:'login'
})(LoginPage);
export default LoginPage;