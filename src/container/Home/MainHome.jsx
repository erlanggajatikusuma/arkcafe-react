import React, { Component } from 'react';
import './MainHome.css';
import CardProduct from '../../component/CardProduct';
import axios from 'axios';
import Pagination from '../../component/Pagination';
import { CartContext } from '../../context/Cart';

class MainHome extends Component {
    static contextType = CartContext
    
    state = {
        products: [],
        paginations: ''
    }

    cekToken = () => {
        const token = localStorage.getItem('token');
        if(!token){
            this.props.history.push('/login');
            return
        }
    }
    componentDidMount() {
        this.cekToken()
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product`)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        products: res.data.result,
                        paginations: res.data.pagination
                    })
                })
    }

    nextPage = () => {
        axios.get(this.state.paginations.nextPage)
            .then(res => {
                console.log(res);
                this.setState({
                    products: res.data.result,
                    paginations: res.data.pagination
                })
            })
    }

    prevPage = () => {
        axios.get(this.state.paginations.prevPage)
            .then(res => {
                console.log(res);
                this.setState({
                    products: res.data.result,
                    paginations: res.data.pagination
                })
            })
    }

    render() {
        const {cartList, setCartList, addToCart} = this.context
        return (
            <div className="main">
                <div className="form-group row col-lg-2 col-md-2 col-sm-2 mx-3 mt-3">
                <select className="form-control" name="sort" id="sort">
                {/* <select class="form-control" name="sort" id="sort" @change="sorter" style="width:100px"> */}
                    <option >Sort by</option>
                    <option >Name</option>
                    <option >Price</option>
                </select>
                </div>
                <div className="row">
                    {
                        this.state.products.map((product, index) => {
                            return <CardProduct key={product.id} data={product} addToCart={() => this.context[2](product, index)} />
                        })
                    }
                </div>
                <button onClick={() => console.log(this.state)}>Test</button>
                <button onClick={this.nextPage}>Test 2</button>
                <button onClick={this.prevPage}>Test 3</button>
                <div className="page d-flex">
                    {/* <pagination v-show="active" :data="paginations" @event-page="handlePage" /> */}
                    <Pagination data={this.state.paginations} nextPage={this.nextPage} prevPage={this.prevPage} />
                </div>
            </div>
        )
    }
}

export default MainHome;