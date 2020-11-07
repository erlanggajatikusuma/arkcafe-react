import React from 'react';
import './CardProduct.css';


function CardProduct(props) {
    return (
        <div className="card ml-5 my-2" onClick={() => props.addToCart(props.data)}>
        <div className="card-content my-3">
            <a href="#">
              <div className="img-one">
                <img src={props.data.image} className="card-img" />
              </div>
              {/* <div className="img-one" v-active>
                 <img :src="data.image" className="card-img" @click.prevent="addToCart">
              </div> */}
            </a>
            <p className="text-wrap d-flex ml-2 mt-3">{props.data.name}</p>
            <h5 className="d-flex ml-2">Rp. {props.data.price}</h5>
        </div>
    </div>
    )
}

export default CardProduct;