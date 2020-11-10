import React from 'react';
import './Pagination.css'

function Pagination({data, nextPage, prevPage}) {
    return (
        <div className="container-pagination">
        <nav aria-label="...">
            <ul className="pagination">
                {/* <li class="page-item" v-show="data.currentPage > 1">
                    <a class="page-link" href="#" @click.prevent="setPagination(data.currentPage - 1)">Prev</a>
                </li> */}
                {
                    data.currentPage > 1 ? 
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={prevPage}>Prev</a>
                    </li> : null
                }
                
                {/* <li class="page-item" :class="n==data.currentPage?'active':''" v-for="n in data.totalPage" :key="n">
                    <a class="page-link" href="#" @click.prevent="$emit('event-page', n)">{{n}}</a>
                </li> */}
                <li className="page-item">
                    <a className="page-link">{data.currentPage}</a>
                </li>
                {
                    data.currentPage < data.totalPage ?
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={nextPage}>Next</a>
                    </li> : null
                }
            </ul>
        </nav>
    </div>
    )
}

export default Pagination;
