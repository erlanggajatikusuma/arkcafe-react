import React, { useContext } from 'react';
import './CartItem.css';
import { RootContext } from '../../container/Main/Main';
import { CartContext } from '../../context/Cart';

const CartItem = ({item, index}) => {
    const [cartList, setCartList, addToCart, totalUnit, plusUnit, minusUnit] = useContext(CartContext)

    return (
        <RootContext.Consumer>
            {
                value => {
                    return (
                        <div className="cart-item d-flex">
                            <div className="cart-img pt-3 pl-2">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="add-item p-3 flex-grow-1">
                                <h5 className="text-left">{item.name}</h5>
                                <div className="add-btn d-flex mt-5">
                                    <button type="button" onClick={() => minusUnit(item, index)}>-</button>
                                    <span type="text" className="item">{item.unit}</span>
                                    <button type="button" onClick={() => plusUnit(item, index)}>+</button>
                                    <span className="flex-grow-1 text-right"><h6>Rp. {item.price * item.unit} </h6></span>
                                </div>
                            </div>
                        </div>

                    )
                }
            }
        </RootContext.Consumer>
    )
}

export default CartItem;