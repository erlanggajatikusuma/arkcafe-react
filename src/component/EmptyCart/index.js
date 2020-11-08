import React from 'react';
import emptyImg from '../../assets/food-and-restaurant.png'

export default function EmptyCart() {
    return (
        <div className="empty text-center">
            <img className="rounded mx-auto d-block" src={emptyImg} alt="" />
            <h3>Your cart is empty</h3>
            <p>Please add some items from the menu</p>
        </div>
    )
}
