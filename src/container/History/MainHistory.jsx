import React, { Component } from 'react';
import HistoryIncome from '../../component/HistoryIncome';
import HistoryOrder from '../../component/HistoryOrder';
import './MainHistory.css'

export default class MainHistory extends Component {
    render() {
        return (
            <div className="main-history">
                <HistoryIncome />
                <HistoryOrder />
            </div>
        )
    }
}
