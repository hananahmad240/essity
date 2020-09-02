import React from 'react'
import Button from '../Button/Button';
import Input from '../Inputs/Input';
import './Form.css';


function Form({error}) {
    return (
        <div className="login">
            <h1>Login Form</h1>
            <form className="login-form" >
                <div>
                    <label htmlFor="email">Email</label>
                    <Input type="email" placeholder="enter the valid email" name="email" size="medium"  error={error}></Input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input type="password" placeholder="enter the password" name="password" size="medium"  error={error} ></Input>

                </div>

                <div>
                    <Button size="large" label="login"></Button>
                <Button size="large" label="Guest"></Button>

                </div>
            </form>
        </div>
    )
}

export default Form
