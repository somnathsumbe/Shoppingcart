import React, { Component } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

export default class ProductsDetails extends Component {

    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/ProductList`)
            .then(res => {
                if (this.props.match.params.id) {
                    let product = res.data.filter((product) => {
                        return product.id === this.props.match.params.id;
                    })
                    this.setState({ list: product });
                }
            })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row mb-5">
                        <div className="card ">
                            <div className="wrapper row">

                                {this.state.list.length ?
                                    this.state.list.map((item, i) => {
                                        return (

                                            <>
                                                <div className="preview col-md-6">

                                                    <div className="preview-pic tab-content">
                                                        <div className="tab-pane active" id="pic-1"><img src={item.img} alt={item.name} style={{ "height": 300 }} /></div>
                                                    </div>


                                                </div>
                                                <div className="details col-md-6">
                                                    <h3 className="product-title">{item.name}</h3>
                                                    <h4 className="price">current price: <span>Rs.{item.price}</span></h4>


                                                    <Form>

                                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                                            <Form.Label>Size</Form.Label>
                                                            <Form.Control as="select">
                                                                {item.size.map((size, i) => (<option value={size}>{size}</option>))}
                                                            </Form.Control>
                                                        </Form.Group>

                                                        <Form.Group controlId="exampleForm.ControlSelect2">
                                                            <Form.Label>Quantity</Form.Label>
                                                            <Form.Control as="select">
                                                                {item.quantity.map((quantity) => (<option value={quantity}>{quantity}</option>))}
                                                            </Form.Control>
                                                        </Form.Group>

                                                        <Form.Group controlId="exampleForm.ControlSelect3">
                                                            <Form.Label>Colors</Form.Label>
                                                            <Form.Control as="select">
                                                                {item.color.map((color) => (<option value={color}>{color}</option>))}
                                                            </Form.Control>
                                                        </Form.Group>

                                                    </Form>
                                                    <p><strong>Description</strong></p>
                                                    <p className="product-description">{item.description}</p>

                                                    <p><strong>Features:</strong></p>
                                                    <ul>
                                                        {item.Features.map((featureItem) => (<li>{featureItem}</li>))}
                                                    </ul>

                                                    <div className="action">
                                                        <button type="button" className="btnclass text-uppercase mt-4">add to cart</button>
                                                    </div>
                                                </div>
                                            </>
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
                    </div>
                    <br></br>     <br></br>
                </div>
            </>
        )
    }
}

