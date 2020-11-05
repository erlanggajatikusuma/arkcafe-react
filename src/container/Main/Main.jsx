import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Login from '../Auth/Login';
import Register from '../Auth/Register'
import './Main.css'

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Router>
        )
    }
}
