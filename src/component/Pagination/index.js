import React from 'react';
import './Pagination.css'

function Pagination(props) {
    return (
        <div className="container-pagination">
        <nav aria-label="...">
            <ul className="pagination">
                {/* <li class="page-item" v-show="data.currentPage > 1">
                    <a class="page-link" href="#" @click.prevent="setPagination(data.currentPage - 1)">Prev</a>
                </li> */}
                <li className="page-item">
                    <a className="page-link" href="#">Prev</a>
                </li>
                {/* <li class="page-item" :class="n==data.currentPage?'active':''" v-for="n in data.totalPage" :key="n">
                    <a class="page-link" href="#" @click.prevent="$emit('event-page', n)">{{n}}</a>
                </li> */}
                <li className="page-item">
                    <a className="page-link">{props.data.currentPage}</a>
                </li>
                {/* <li class="page-item" v-show="data.currentPage < data.totalPage">
                    <a class="page-link" href="#" @click.prevent="setPagination(data.currentPage + 1)">Next</a>
                </li> */}
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Pagination;
