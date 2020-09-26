import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Productlist extends Component {
    constructor() {
        super();
        this.state = {
            productList: []
        }
    }

    componentDidMount() {
        this.getProductList();
    }
    getProductList() {
        axios.get(`http://localhost:3000/ProductList`)
            .then(res => {
                if (this.props.match.params.type && res.data) {
                    let products = res.data.filter((product) => {
                        return (product.productType).replace(/\s/g, '').toLowerCase() == this.props.match.params.type;
                    })
                    console.log("products=>", products);
                    this.setState({ productList: products });
                }
            })

    }
    componentWillReceiveProps(prevProps, newProps) {
        this.getProductList();
    }

    render() {
        return (
            <>
                <div className="container">
                    <h5 className="p-2 text-center">Product list</h5>
                    <div className="row mb-5">
                        {this.state.productList.length ?
                            this.state.productList.map((item) => {
                                return (
                                    <div className="col-md-4 mb-4">
                                        <Card>
                                            <Card.Img variant="top" src={item.img} />
                                            <Card.Body>
                                                <Link className="nav-link" to={"/product/" + item.id} >{item.name}{item.price}</Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            }) :
                            <div className="col-md-12">
                                <div class="alert alert-danger text-capitalize">
                                    <strong>Error!</strong> products not available
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </>
        )
    }
}
