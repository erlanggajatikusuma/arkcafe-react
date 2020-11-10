import React, { Component, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Login from '../Auth/Login';
import Register from '../Auth/Register'
import './Main.css'
import HomeProduct from '../Home/HomeProduct';
import History from '../History/History';
import { CartProvider } from '../../context/Cart';
import Product from '../Product/Product';


export const RootContext = createContext();
const Provider = RootContext.Provider;

export default class Main extends Component {
    state = {
        quantity: 5
        
    }

    dispatch = (action) => {
        if(action.type === "PLUS_ORDER") {
            return this.setState({
                quantity: this.state.quantity + 1
            })
        }
        if(action.type === "MINUS_ORDER") {
            if(this.state.quantity > 1) {
                return this.setState({
                    quantity: this.state.quantity - 1
                })

            }
        }
    }

    render() {
        return (
            <Router>
                <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }>
                    <CartProvider>
                        <Route path="/" exact component={Landing} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/home" component={HomeProduct} />
                        <Route path="/history" component={History} />
                        <Route path="/product" component={Product} />
                    </CartProvider>
                </Provider>
            </Router>
        )
    }
}
