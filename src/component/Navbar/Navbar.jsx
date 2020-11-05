import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            {/* <Router> */}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    {/* <a className="navbar-brand" href="#">Arkcafe</a> */}
                    <span className="navbar-brand">Arkcafe</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Router>
                                <Link class="nav-link active" to="/home">Home</Link>
                                <Link class="nav-link" to="/login">Login</Link>
                                <Link class="nav-link" to="/register">Register</Link>
                            </Router>
                        </div>
                    </div>
                </div>
            </nav>
            {/* </Router> */}
        </header>
    )
}
