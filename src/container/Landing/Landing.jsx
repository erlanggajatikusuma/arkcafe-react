import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from '../Auth/Login';
import './Landing.css';

class Landing extends Component {
    push = (e) => {
        const {history} = this.props;
        const path = e.target.innerText;
        history.push(`/${path.toLowerCase()}`);
    }
    render() {
        return (
            <div className="landing">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container">
                            {/* <a className="navbar-brand" href="#">Arkcafe</a> */}
                            <span className="navbar-brand">Arkcafe</span>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ml-auto">
                                    <ul>
                                        <li className="nav-link" onClick={this.push}>login</li>
                                        <li className="nav-link" onClick={this.push}>register</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className="info text-left px-5">
                        <h1 className="display-4">Ark Cafe</h1>
                        <div className="badge text-wrap">
                            <p className="lead text-left">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Eligendi laboriosam quia animi debitis? Dolor, quas similique deserunt,
                                reiciendis ea nam modi repellendus dolorum possimus sed quam.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Eligendi laboriosam quia animi debitis? Dolor, quas similique deserunt,
                                reiciendis ea nam modi repellendus dolorum possimus sed quam.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Eligendi laboriosam quia animi debitis? Dolor, quas similique deserunt,
                                reiciendis ea nam modi repellendus dolorum possimus sed quam.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Landing;