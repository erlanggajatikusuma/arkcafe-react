import React from 'react';
import menu from '../../assets/menu.png';
import search from '../../assets/magnifying-glass.png';
import './headbar.css'

export default function Headbar() {
    return (
        <div className="header d-flex justify-content-between align-items-center px-3">
            <div>
                <img className="m-2 ml-3 img-head" src={menu} />
            </div>
            <h2>Food Items</h2>
            <div>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search..." />
                {/* <input type="text" placeholder="Search..." v-on:keyup="searching"> */}
            </div>
        </div>
    )
}
