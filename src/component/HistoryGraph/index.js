import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import './HistoryGraph.css'

function HistoryGraph() {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [
                {
                    label: 'level of thiccness',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: ['rgba(75, 192, 192, 0.6)'],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <div className="graph-wrapper m-4">
            <div className="mx-5 pt-4 d-flex justify-content-between">
                <h3>Revenue</h3>
                <div className="dropdown">
                    {/* <select className="custom-select" v-model="thisMonth" @change="selectMonth"> */}
                    <select className="custom-select">
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                    </select>
                </div>
            </div>
            <div className="box-body p-4">
            </div>
                {/* <div style={{height: "100px", width: '100%'}}>
                    <Line data={chartData} options={{
                        responsive:true
                    }} />
                </div> */}
        </div>
    )
}

export default HistoryGraph;