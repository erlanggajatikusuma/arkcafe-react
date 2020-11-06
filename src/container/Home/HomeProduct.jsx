import React, { Component } from 'react';
import Headbar from '../../component/Headbar';
import Sidebar from '../../component/Sidebar';
import Cart from '../Cart/Cart';
import './HomeProduct.css'
import MainHome from './MainHome';

class HomeProduct extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-md-8 col-sm-12 mx-0 px-0 background-item">
                        <Headbar />
                        <div className="main-content d-flex">
                            <Sidebar />
                            <MainHome history={this.props.history} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 mx-0 px-0">
                        <Cart />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeProduct;