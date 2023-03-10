import React from 'react';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';
import  LoginMessage  from "../loginmessage/LoginMessage"
import { Button } from '@mui/material'


/**
The AuthForm component can be used for Login or Sign Up.
Props for Login: name="login", displayName="Login"
Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const formName = evt.target.name;
		const username = evt.target.username.value;
		const password = evt.target.password.value;
		dispatch(authenticate({ username, password, method: formName }));
	};

	return (
		<div>
			<form onSubmit={handleSubmit} name={name}>
				<div>
					<label htmlFor='username'>
						<small>Username</small>
					</label>
					<input className='loginForm' name='username' type='text' />
				</div>
				<div>
					<label htmlFor='password'>
						<small>Password</small>
					</label>
					<input className='loginForm' name='password' type='password' />
				</div>
				<div>
					<Button type='submit'>{displayName}</Button>
					
				</div>
				<LoginMessage />
			</form>
		</div>
	);
};

export default AuthForm;
