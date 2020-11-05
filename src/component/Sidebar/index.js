import React from 'react';
import './sidebar.css'
import fork from '../../assets/fork.png';
import clipboard from '../../assets/clipboard.png';
import add from '../../assets/add.png';
import user from '../../assets/user.png';
import logout from '../../assets/logout (1).png';

export default function Sidebar() {
    return (
        <div className="sidebar navbar-nav">
            <div className="p-3 img-drop tex-center">
                <span>
                    <img className="mx-auto d-block" src={fork} alt="fork" />
                </span>
            </div>
            <div className="p-3 img-drop">
                {/* <router-link to="/history">
                    <img className="image" src="../assets/clipboard.png">
                </router-link> */}
                <span>
                    <img className="mx-auto d-block" src={clipboard} alt="" />
                </span>
            </div>
            <div className="p-3 img-drop" v-if="roleId === 1">
                {/* <router-link to="/product">
                    <img className="image" src="../assets/add.png">
                </router-link> */}
                <span>
                    <img className="mx-auto d-block" src={add} alt="" />
                </span>
            </div>
            <div className="p-3 img-drop" v-if="roleId === 1">
                {/* <router-link to="/user">
                    <img className="image" src="../assets/user.png">
                </router-link> */}
                <span>
                    <img className="mx-auto d-block" src={user} alt="" />
                </span>
            </div>
            <div className="p-4 img-drop">
                {/* <router-link to="/login">
                    <img @click="logout" className="image" src="../assets/logout (1).png" />
                </router-link> */}
                <span>
                    <img className="image" src={logout} alt="" />
                </span>
            </div>
        </div>
    )
}
