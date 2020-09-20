import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Productlist extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/ProductList`)
            .then(res => {
                this.setState({ list: res.data });
            })
    }

    render() {
        return (
            <>
                <div className="container">
                    <h5 className="p-2">Productlist</h5>
                    <div className="row mb-5">
                        {this.state.list.length ?
                            this.state.list.map((item, i) => {
                                return (
                                    <div className="col-md-4 mb-4">
                                        <Card>
                                            <Card.Img variant="top" src={item.img} />
                                            <Card.Body>
                                                <Button variant="link"> {item.name}</Button>
                                                <Button variant="link">{item.price}
                                                </Button>
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
