import React, { Component } from 'react';
import HistoryGraph from '../../component/HistoryGraph';
import HistoryIncome from '../../component/HistoryIncome';
import HistoryOrder from '../../component/HistoryOrder';
import './MainHistory.css'

export default class MainHistory extends Component {
    render() {
        return (
            <div className="main-history">
                <HistoryIncome />
                <HistoryGraph />
                <HistoryOrder />
            </div>
        )
    }
}
