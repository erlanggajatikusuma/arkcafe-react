import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    state = {
        formLogin: {
            email: '',
            password: ''
        }
    }

    handleFormChange = (event) => {
        let formLoginNew = {...this.state.formLogin}
        formLoginNew[event.target.name] = event.target.value
        this.setState({
            formLogin: formLoginNew
        })
    }

    handleSubmit = () => {
        console.log(this.props)
        console.log(this.state)
        const {history} = this.props;
        history.push('/home');
    }
    push = () => {
        const {history} = this.props;
        history.push('/register')
    }
    
    render() {
        return (
            <div className="login-container d-flex align-items-center justify-content-center">
                <form action="" className="login-form text-center">
                    <h1 className="font-weight-light text-uppercase mb-5 text">Login</h1>
                    <div className="form-group">
                        <input type="email"
                        value={this.state.email} 
                        placeholder="email" 
                        onChange={this.handleFormChange} 
                        name="email" 
                        className="form-control form-control-lg"/>
                    </div>
                    <div className="form-group">
                        <input type="password" value={this.state.password} placeholder="password" onChange={this.handleFormChange} name="password" className="form-control form-control-lg"/>
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-primary btn-block btn-lg mt-5">LOGIN</button>
                    <p className="mt-3 font-weight-normal h6 text">Not registered? <span onClick={this.push}><strong>Register Now</strong></span></p>
                </form>
                
            </div>
        )
    }
}

export default Login;
