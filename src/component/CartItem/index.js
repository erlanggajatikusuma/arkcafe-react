import React from 'react';
import './CartItem.css';
import item from '../../assets/bear-select.png';

export default function CartItem() {
    return (
        <div className="cart-item d-flex">
            <div className="cart-img pt-3 pl-2">
                <img src={item} alt="" />
                {/* <img src="../assets/bear-select.png" alt=""> */}
            </div>
            <div className="add-item p-3 flex-grow-1">
                <h5 className="text-left">Coffee Latte</h5>
                <div className="add-btn d-flex mt-5">
                    <button type="button">-</button>
                    <span className="item">0</span>
                    <button type="button">+</button>
                    <span className="flex-grow-1 text-right"><h6>Rp. 5000</h6></span>
                </div>
                {/* <div class="add-btn d-flex mt-5">
                    <button @click="min" type="button">-</button>
                    <span class="item" style="width: 25px">{{item}}</span>
                    <button @click="add" type="button">+</button>
                    <span class="flex-grow-1 text-right"><h6>Rp. {{ price }}</h6></span>
                </div> */}
            </div>
        </div>
    )
}
