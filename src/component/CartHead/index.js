import React from 'react';
import './CartHead.css'

export default function CartHead() {
    return (
        <div className="cart-title d-flex justify-content-center align-items-center">
            <h2>Cart</h2>
            <span className="total-item rounded-circle ml-2 mb-1">0</span>
            {/* <span class="total-item rounded-circle ml-2 mb-1">{{item}}</span> */}
        </div>
    )
}
