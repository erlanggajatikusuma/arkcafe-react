import React, { Component } from 'react';
import Back from '../../assets/keyboard-left-arrow-button.png';
import AddProduct from '../../component/AddProduct';
import './Product.css'

class Product extends Component {
    state = {
        active: false
    }
    render() {
        return (
            <div id="products">
                <div className="row bg-dark">
                    <div className="col-lg-12 d-flex">
                    <div className="img-wrapper">
                        {/* <router-link to="/home">
                        <img src="../../assets/keyboard-left-arrow-button.png">
                        </router-link> */}
                        <img src={Back} alt=""/>
                    </div>
                    <p className="text-center text-light display-4 pt-2">Product Data</p>
                    </div>
                </div>

                <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <h3 className="text-info text-left">Products</h3>
                    </div>
                    <div className="col-lg-6">
                    {/* <button type="button" className="btn btn-primary float-right" @click.prevent="toggle"> */}
                        <button type="button" className="btn btn-primary float-right" onClick={() => this.setState({active: true})}>
                            Add new product
                        </button>
                    </div>
                </div>
                    <hr className="bg-info" />
                    <div className="row">
                    <div className="col-lg-12">
                        <table className="table table-bordered table-striped">
                        <thead>
                            <tr className="bg-info text-light">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Id Category</th>
                            <th>Id Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr className="text-center" v-for="product in products" :key="product.id" :data="product"> */}
                            <tr className="text-center">
                            {/* <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td>Rp. {{product.price}}</td>
                            <td>{{product.idCategory}}</td>
                            <td>{{product.idStatus}}</td> */}
                            <td>id</td>
                            <td>.name</td>
                            <td>Rp. price</td>
                            <td>.idCategory</td>
                            <td>.idStatus</td>
                            {/* <td><a href="#" className="text-success" @click.prevent="editData(product)">Edit</a></td>
                            <td><a href="#" className="text-danger" @click.prevent="delProduct(product.id)">Delete</a></td> */}
                            <td><a href="#" className="text-success">Edit</a></td>
                            <td><a href="#" className="text-danger">Delete</a></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                    {/* <div className="page row">
                    <pagination :data="paginations" @event-page="handlePage"/>
                    </div> */}
                </div>
                {/* <modalProduct v-show="modalActive" :data="modalsData" @close="toggle" @fire-event="dataHandler" />
                <delModal v-show="modalDel" @event-modal="toggleDel" @delete-data="deleteData"/> */}
                {
                    this.state.active && <AddProduct setActive={() => this.setState({active: false})}/>
                }
            </div>
        )
    }
}

export default Product;