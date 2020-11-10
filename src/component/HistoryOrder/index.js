import React, { useState, useEffect } from 'react';
import './HistoryOrder.css';
import axios from 'axios';


function HistoryOrder() {
    const [orders, setOrder] = useState([])
    const [paginations, setPaginations] = useState('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/history`)
            .then(res => {
                setOrder(res.data.result)
                setPaginations(res.data.pagination)
            })
            .catch(err => console.log(err))
    })


    return (
        <div className="order-container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-wrapper m-4">
                        <button onClick={() => console.log(orders)} >Test</button>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Invoices</th>
                                    <th>Cashier</th>
                                    <th>Date</th>
                                    <th>Orders</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => {
                                        return (
                                            <tr>
                                                <td data-label="Id">{order.id}</td>
                                                <td data-label="Invoices">{order.invoice}</td>
                                                <td data-label="Cashier">{order.cashier}</td>
                                                <td data-label="Date">{order.date}</td>
                                                <td data-label="Orders">{order.orders}</td>
                                                <td data-label="Amount">Rp. {order.amount}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryOrder;
