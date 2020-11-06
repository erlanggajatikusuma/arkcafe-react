import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';

class Register extends Component {
    state = {
        formRegister: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }
    cekToken = () => {
        const {history} = this.props;
        const token = localStorage.getItem('token');
        if(token){
            history.push('/home')
        }
    }

    componentDidMount() {
        this.cekToken()
    }

    handleFormChange = (event) => {
        let formRegisterNew = {...this.state.formRegister}
        formRegisterNew[event.target.name] = event.target.value
        this.setState({
            formRegister: formRegisterNew
        })
        console.log(this.state)
    }

    handleRegister = (e) => {
        e.preventDefault();
        console.log(this.state)
        const {history} = this.props;
        const data = {
            firstName: this.state.formRegister.firstName,
            lastName: this.state.formRegister.lastName,
            email: this.state.formRegister.email,
            password: this.state.formRegister.password

        }
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/user/register`, data)
            .then(res => {
                history.push('/login')
            })
            .catch(err => console.log(err))
    }

    push = () => {
        const {history} = this.props;
        history.push('/login')
    }
    render() {
        return (
            <div className="register-container d-flex align-items-center justify-content-center">
            <form className="register-form text-center">
                <h1 className="font-weight-light text-uppercase mb-5 text">Register</h1>
                <div className="form-group">
                    {/* <input type="text" placeholder="First name" class="form-control form-control-lg" v-model="$v.firstName.$model"> */}
                    <input type="text" placeholder="First name" className="form-control form-control-lg" onChange={this.handleFormChange} name="firstName" value={this.state.firstName} />
                    {/* <span v-if="$v.firstName.$error" class="validation">First name min 3 characters</span> */}
                </div>
                <div className="form-group">
                    {/* <input type="text" placeholder="Last name" required class="form-control form-control-lg" v-model="$v.lastName.$model"> */}
                    <input type="text" placeholder="Last name" className="form-control form-control-lg"
                    name="lastName"
                     onChange={this.handleFormChange}
                     value={this.state.lastName} />
                    {/* <span v-if="$v.lastName.$error" class="validation">Last name min 3 characters</span> */}
                </div>
                <div className="form-group">
                <input type="email" placeholder="Email"
                className="form-control form-control-lg"
                name="email"
                onChange={this.handleFormChange}
                value={this.state.email} />
                {/* <input type="email" placeholder="Email"
                className="form-control form-control-lg"
                v-model="email"
                > */}
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <input type="password" placeholder="Create your password" className="input"
                        name="password"
                        onChange={this.handleFormChange}
                        value={this.state.password} />
                        {/* <input :type="type" placeholder="Create your password" className="input" v-model="password"> */}
                        <div className="input-group-append">
                            {/* <div @click="show">
                                <i v-show="display" class="fa fa-eye"></i>
                                <i v-show="!display" class="dua fa fa-eye-slash"></i>
                            </div> */}
                        </div>
                        {/* <span class="validation" v-if="password.length >= 1 && password.length < 6">The password min 6 characters</span> */}
                    </div>
                </div>
                <button className="btn btn-primary btn-block btn-lg mt-5" onClick={this.handleRegister}>Register</button>
                {/* <button type="submit" className="btn btn-primary btn-block btn-lg mt-5" @click="handleRegister">Register</button> */}
                <p className="mt-3 font-weight-normal text h6">Already have account? <span onClick={this.push}><strong>Login</strong></span></p>
            </form>
            </div>
        )
    }
}

export default Register;