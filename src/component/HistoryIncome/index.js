import React from 'react';
import './HistoryIncome.css'

export default function HistoryIncome() {
    return (
        <div className="record m-4">
            <div className="row d-flex">
                <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                    <div className="card-income">
                        <div className="card-body">
                            <h4>Today's Income</h4>
                            <h2>Rp. 50000</h2>
                            {/* <h2>Rp. {{setDay}}</h2> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                    <div className="card-income">
                        <div className="card-body">
                            <h4>Orders</h4>
                            {/* <h2>{{setOrders}}</h2> */}
                            <h2>1</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                    <div className="card-income">
                        <div className="card-body">
                            <h4>This Year's Income</h4>
                            <h2>Rp. 50000</h2>
                            {/* <h2>Rp. {{setYear}}</h2> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
