import React from 'react';
import HistoryBar from '../../component/HistoryBar'
import Sidebar from '../../component/Sidebar';
import MainHistory from './MainHistory';

export default function History() {
    return (
        <div>
            <HistoryBar />
            <div class="main-content d-flex">
            <Sidebar />
            <MainHistory />
            </div>
        </div>
    )
}
