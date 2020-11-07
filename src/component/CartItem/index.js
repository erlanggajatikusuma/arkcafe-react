import React from 'react';
import './CartItem.css';
import item from '../../assets/bear-select.png';
import { RootContext } from '../../container/Main/Main'

export default function CartItem() {
    return (
        <RootContext.Consumer>
            {
                value => {
                    return (
                        <div className="cart-item d-flex">
                            <div className="cart-img pt-3 pl-2">
                                <img src={item} alt="" />
                            </div>
                            <div className="add-item p-3 flex-grow-1">
                                <h5 className="text-left">Coffee Latte</h5>
                                <div className="add-btn d-flex mt-5">
                                    <button type="button" onClick={() => value.dispatch({type: 'MINUS_ORDER'})}>-</button>
                                    <span type="text" className="item">{value.state.quantity}</span>
                                    <button type="button" onClick={() => value.dispatch({type: 'PLUS_ORDER'})}>+</button>
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
            }
        </RootContext.Consumer>
    )
}
