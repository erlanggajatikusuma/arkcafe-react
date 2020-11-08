import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})  => {
    const [cartList, setCartList] = useState([])
    const [totalUnit, setTotalUnit] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCart = (newItem, index) => {
        // IF CART NOT EMPTY
        if(cartList.length > 0) {
            const newCartList = cartList.filter((item, index) => {
                return item.id !== newItem.id
            })
            // IF SAME ITEM
            if(newCartList.length === cartList.length) {
                setCartList((item) => [...item, {
                    ...newItem,
                    unit: 1
                }])
                setTotalUnit(item => item + 1)
                setTotalPrice(item => item + newItem.price)
            } 
            // IF DIFFERENT ITEM
            else {
                setCartList(newCartList)
                setTotalUnit(item => item - cartList[index].unit)
                setTotalPrice(item => item - newItem.price * cartList[index].unit)
            }
        }
        // IF CART EMPTY
        else {
            setCartList((item) => [...item, {
                ...newItem,
                unit: 1
            }])
            setTotalUnit(item => item + 1)
            setTotalPrice(item => item + newItem.price)
        }
    }

    const plusUnit = (newItem, index) => {
        const arr = cartList
        const newUnit = arr[index].unit
        arr[index] = {
            ...arr[index],
            unit: newUnit + 1
        }
        setCartList(arr)
        setTotalUnit(item => item + 1)
        setTotalPrice(item => item + newItem.price)
    }

    const minusUnit = (newItem, index) => {
        const arr = cartList
        const newUnit = arr[index].unit
        if(newUnit > 1) {
            arr[index] = {
                ...arr[index],
                unit: newUnit - 1
            }
            setCartList(arr)
            setTotalUnit(item => item - 1)
            setTotalPrice(item => item - newItem.price)

        } else {
            const newCartList = cartList.filter((item, index) => {
                return item.id !== newItem.id
            })
            setCartList(newCartList)
            setTotalUnit(item => item - 1)
            setTotalPrice(item => item - newItem.price)
        }
    }
    return (
        <CartContext.Provider value={[cartList, setCartList, addToCart, totalUnit, plusUnit, minusUnit, totalPrice]}>
            {children}
        </CartContext.Provider>
    )
}
