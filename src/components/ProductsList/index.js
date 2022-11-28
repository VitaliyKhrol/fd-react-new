import React, { Component } from 'react';
import {getProducts} from '../../api/products';
import Spiner from '../Spiner';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isFetching: true
        }
    }

componentDidMount(){
    getProducts()
    .then(data => {
        this.setState({
            products: data,
            isFetching: false
        })
    })
}

    mapProducts = () => {
       return this.state.products.map(product => <li key={product.id}>{product.title} --- {product.category} --- {product.price} </li>)
    }

    render() {
        const {isFetching, products} = this.state;
        return (
            <div>
                {isFetching && <Spiner />}
                <ul>
                {products.length && this.mapProducts()}
                </ul>
            </div>
        );
    }
}

export default ProductsList;