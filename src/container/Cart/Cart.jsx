import React, { Component } from 'react';
import CartHead from '../../component/CartHead';
import './Cart.css';
import item from '../../assets/bear-select.png';
import CartItem from '../../component/CartItem';

export default class Cart extends Component {
    render() {
        return (
            <div className="cart-container">
                <CartHead />
                <CartItem />
                {/* <emptyCart v-if="total === 0"/> */}
                {/* <div class="cart-item d-flex" v-else v-for="item in items" :key="item.id"> */}

                {/* <div class="cart-item d-flex">
                    <div class="cart-img pt-3 pl-2">
                        <img src={item} />
                    </div>
                    <div class="add-item p-3 flex-grow-1 mx-2">
                        <h5 class="text-left">Cappucino</h5> */}
                        {/* <h5 class="text-left">{{item.name}}</h5> */}
                        {/* <div class="add-btn d-flex mt-5">
                            <button type="button">-</button>
                            <span class="item">1</span>
                            <button type="button">+</button>
                            <span class="flex-grow-1 text-right"><h6>Rp. 5000</h6></span> */}
                            {/* <button type="button" @click="dec(item.id)">-</button>
                            <span class="item" style="width: 25px">{{item.qty}}</span>
                            <button type="button" @click="inc(item.id)">+</button>
                            <span class="flex-grow-1 text-right"><h6>Rp. {{ item.price * item.qty }}</h6></span> */}
                        {/* </div>
                    </div>
                </div> */}
                <div className="cart-total">
                {/* <div class="total d-flex justify-content-between pr-3 pl-2" v-if="total > 0"> */}
                <div className="total d-flex justify-content-between pr-3 pl-2">
                    <span className="right">Total</span>
                    {/* <span class="right font-weight-bold">Rp. {{price}}*</span> */}
                    <span className="right font-weight-bold">Rp. 5000*</span>
                </div>
                <span className="d-flex m-2 font-weight-bold">*Belum Termasuk ppn</span>
                {/* <span class="d-flex m-2 font-weight-bold" v-if="total > 0">*Belum Termasuk ppn</span> */}
                <div className="checkout-btn">
                    <button className="btn btn-two font-weight-bold py-2 mb-2 btn-block">
                    Checkout
                    </button>
                    <button className="btn btn-one font-weight-bold py-2 btn-block">
                    Cancel
                    </button>
                </div>
                {/* // <div class="checkout-btn" v-if="total > 0">
                //     <button class="btn btn-two font-weight-bold py-2 mb-2 btn-block" @click="Checkout">
                //     Checkout
                //     </button>
                //     <button class="btn btn-one font-weight-bold py-2 btn-block" @click="clear">
                //     Cancel
                //     </button>
                // </div> */}
                </div>
                {/* <modalCheckout v-show="show" @close="closeModal"/> */}
            </div>
        )
    }
}
