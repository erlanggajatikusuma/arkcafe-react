import React from 'react';
import menu from '../../assets/menu.png';
import './HeadBar.css'

export default function HistoryBar() {
    return (
        <div className="header">
            <div className="banner">
                <div className="menu-img">
                    <img src={menu} />
                </div>
                <h2>History</h2>
            </div>
        </div>
    )
}
