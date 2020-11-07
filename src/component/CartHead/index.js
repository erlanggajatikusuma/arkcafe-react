import React from 'react';
import './CartHead.css';
import {RootContext} from '../../container/Main/Main'

export default function CartHead() {
    return (
        <RootContext.Consumer>
            {
                value => {
                    return (
                        <div className="cart-title d-flex justify-content-center align-items-center">
                            <h2>Cart</h2>
                            <span className="total-item rounded-circle ml-2 mb-1">{value.state.quantity}</span>
                        </div>

                    )
                }
            }
        </RootContext.Consumer>
    )
}
