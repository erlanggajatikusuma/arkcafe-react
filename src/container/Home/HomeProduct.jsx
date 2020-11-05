import React, { Component } from 'react';
import Headbar from '../../component/Headbar';
import Sidebar from '../../component/Sidebar';
import './HomeProduct.css'

class HomeProduct extends Component {
    render() {
        return (
            <div>
                <Headbar />
                <Sidebar />
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default HomeProduct;