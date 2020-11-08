import React, { useContext } from 'react';
import './CartHead.css';
import {RootContext} from '../../container/Main/Main'
import { CartContext } from '../../context/Cart';

export default function CartHead() {
    const [cartList, setCartList, addToCart, totalUnit, plusUnit] = useContext(CartContext)
    return (
            <div className="cart-title d-flex justify-content-center align-items-center">
                <h2>Cart</h2>
                <span className="total-item rounded-circle ml-2 mb-1">{totalUnit}</span>
            </div>
    )
}
