import React, { Component } from 'react';
import CartHead from '../../component/CartHead';
import './Cart.css';
import CartItem from '../../component/CartItem';
import { CartContext } from '../../context/Cart';
import EmptyCart from '../../component/EmptyCart';
import Modal from '../../component/Modal';
import axios from 'axios';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default class Cart extends Component {
    static contextType = CartContext
    state = {
        modalVisible: false,
        invoice: '',
        cashier: ''
    }

    generateInvoice = () => {
        const d = new Date()
        const day = d.getDate().toString()
        const month = (d.getMonth() + 1).toString()
        const year = d.getFullYear().toString().split('').splice(2, 3).join('')
        const rnd = Math.random(0, 100).toString().substr(14).toString()
        const invoice = day + month + year + rnd
        this.setState({
            invoice: invoice
        })
    }

    name = () => {
        const cashiers = ['Andi', 'Maya', 'Agus', 'Sinta', 'Bagas', 'Putri']
        const randomize = []
        for (let i = 0; i < 1; i++) {
          randomize.push(cashiers.splice(Math.floor(Math.random() * cashiers.length), 1))
        }
        this.setState({
            cashier: randomize.toString()
        })
      }

    handleCheckout = () => {
        const productName = []
        this.context[0].map(item => {
            productName.push(item.name)
        })
        this.generateInvoice();
        this.name();
        MySwal.fire({
            title: 'Checkout',
            text: "Want to checkout ?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                this.setState({
                    modalVisible: true
                })
                const data = {
                    cashier: this.state.cashier,
                    invoice: `#${this.state.invoice}`,
                    orders: productName.join(', '),
                    amount: this.context[6] + (this.context[6] * 1/10)
                }
                axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/history`, data)
                    .then(res => {
                        console.log(res)
                    })
            }
          })
    }

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
                        <button onClick={this.handleCheckout} className="btn btn-two font-weight-bold py-2 mb-2 btn-block">
                        Checkout
                        </button>
                        {/* <button onClick={() => {this.setState({modalVisible: true})}} className="btn btn-two font-weight-bold py-2 mb-2 btn-block">
                        Checkout
                        </button> */}
                        <button className="btn btn-one font-weight-bold py-2 btn-block">
                        Cancel
                        </button>
                    </div>
                    </div>
                    </>
                }
                {/* // <div class="checkout-btn" v-if="total > 0">
                //     <button class="btn btn-one font-weight-bold py-2 btn-block" @click="clear">
                //     Cancel
                //     </button>
                // </div> */}
                {
                    this.state.modalVisible && <Modal setActive={() => this.setState({modalVisible: false})}
                        invoices={this.state.invoice}
                        cashier={this.state.cashier}
                     />
                }
            </div>
        )
    }
}
