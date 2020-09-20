import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default class Carousal extends Component {
    constructor(props) {
        super(props);
        this.state = { product: {}, productIndex: null };
    }
    componentDidMount() {
        this.setState({
            product: this.props.product,
            productIndex:this.props.productIndex
        });
    }
    render() {
        if (!this.state.product) {
            return null;
        }
        return ( 
            <> 
                <Carousel showArrows={true} autoPlay showThumbs={false} key={this.state.productIndex}>
                    <>
                        {this.state.product &&  this.state.product.img &&  this.state.product.img.length?
                            this.state.product.img.map((prodImage, index) => {
                                return <div key={index}>
                                    <img  src={prodImage} />
                                </div>
                            })
                            : null

                        }
                       
                    </>
                </Carousel>
                <div className="p-5 mb-5">
                    <h4 className="text-center">{this.state.product.name} </h4>
                    <button type="button" className="btnclass text-uppercase mt-4">Shop now</button>
                </div>
           
            </>
        )
    }
}
