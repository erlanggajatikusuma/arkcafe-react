import React, { useContext } from 'react';
import { CartContext } from '../../context/Cart';
import './Modal.css'

export default function Modal({setActive, invoices, cashier}) {
    const [cartList, setCartList, addToCart, totalUnit, plusUnit, minusUnit, totalPrice] = useContext(CartContext)

    return (
        <div className="modal" id="modalCheckout">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" onClick={setActive}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="modal-head d-flex justify-content-between">
                        <h5 className="modal-title font-weight-bold">Checkout</h5>
                        <span className="h6 font-weight-bold">Receipt no: #{invoices}</span>
                    </div>
                    <small className="h6 mb-5 d-flex">Cashier: {cashier}</small>
                    {
                        cartList.map(item => {
                            return (
                                <div className="print-list mt-5">
                                    <div className="item-checkout">
                                        <span> {item.name} x {item.unit} </span>
                                        <span>Rp. {item.price * item.unit} </span>
                                    </div>
                                    
                                </div>

                            )
                        })
                    }
                            <div className="item-checkout">
                                    <span>PPN 10%</span>
                                    <span>Rp. {totalPrice * 1/10}</span>
                            </div>
                            <div className="float-right font-weight-bold font-15">
                                    Total: Rp. {totalPrice + (totalPrice * 1/10)}
                            </div>
                            <div className="clearfix"></div>
                                <p className="text-left font-weight-bold font-15">
                                    Payment: Cash
                                </p>
                            </div>
                <div className="modal-footer" v-if="!print">
                    <div className="footer-btn align-items-center">
                        <button type="button" className="btn print">Print</button>
                        <p className="h6 my-2">Or</p>
                        <button type="button" className="btn send">Send Email</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
