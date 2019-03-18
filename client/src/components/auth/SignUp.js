import React, { Component } from 'react'
import TextFieldInput from '../common/input/TextField';

class SignUp extends Component {
    render() {
        return (
            <div>
                <h2>Sign Up!</h2>
                <form className="auth-form">
                    <TextFieldInput type="email" placeholder="Email" />
                    <TextFieldInput type="password" placeholder="Password" />
                    <TextFieldInput type="password" placeholder="Confirm Password" />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;