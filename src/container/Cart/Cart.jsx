import React, { Component } from 'react';
import CartHead from '../../component/CartHead';
import './Cart.css';
import CartItem from '../../component/CartItem';
import { CartContext } from '../../context/Cart';
import EmptyCart from '../../component/EmptyCart';

export default class Cart extends Component {
    static contextType = CartContext

    render() {

        return (
            <div className="cart-container">
                <CartHead />
                {
                    this.context[0].length > 0 ?
                    this.context[0].map((item, index) => {
                        return (
                            <CartItem item={item} index={index} key={item.id} />
                        )
                    }) : <EmptyCart/>
                }
                {
                    this.context[0].length > 0 && 
                    <>
                    <div className="cart-total">
                    <div className="total d-flex justify-content-between pr-3 pl-2">
                        <span className="right">Total</span>
                        <span className="right font-weight-bold">Rp. {this.context[6]}*</span>
                    </div>
                    <span className="d-flex m-2 font-weight-bold">*Belum Termasuk ppn</span>
                    <div className="checkout-btn">
                        <button className="btn btn-two font-weight-bold py-2 mb-2 btn-block">
                        Checkout
                        </button>
                        <button className="btn btn-one font-weight-bold py-2 btn-block">
                        Cancel
                        </button>
                    </div>
                    </div>
                    </>
                }
                {/* // <div class="checkout-btn" v-if="total > 0">
                //     <button class="btn btn-two font-weight-bold py-2 mb-2 btn-block" @click="Checkout">
                //     Checkout
                //     </button>
                //     <button class="btn btn-one font-weight-bold py-2 btn-block" @click="clear">
                //     Cancel
                //     </button>
                // </div> */}
                {/* <modalCheckout v-show="show" @close="closeModal"/> */}
            </div>
        )
    }
}
