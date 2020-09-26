import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {  Link } from 'react-router-dom';
import Helper from '../../Shared/Helper';

export default class Carousal extends Component {
    constructor(props) {
        super(props);
        this.state = { product: props.product, productIndex: props.productIndex };
    }
    componentDidMount() {
        this.setState({
            product: this.props.product,
            productIndex:this.props.productIndex
        });
    }
     getConfigurableProps = () => ({
        showArrows: true,
        showStatus: true,
        showIndicators:  true, 
        infiniteLoop: true,
        showThumbs: true,
        useKeyboardArrows: true,
        autoPlay: true,
        stopOnHover: true,
        swipeable: true,
        dynamicHeight: true,
        emulateTouch: true,
        // selectedItem: 0,
        // interval: 1000,
        // transitionTime: 150,
        // swipeScrollTolerance: 1,
    });
   
    render() {
        if (!this.state.product || !this.state.product.img) {
            return null;
        }
        const productImages =  this.state.product.img.map((prodImage, index) => {
            return (
                <>
                    <div key={index + 1}>
                        <img src={prodImage} alt="" key={'prod-'+index+1}/>
                    </div>
                </>
            )
        })
        return ( 
            <> 
                <Carousel {...this.getConfigurableProps()} key={'product-'+this.state.productIndex}>
                   {productImages}
                </Carousel>
                <div className="p-5 mb-5">
                    <h4 className="text-center">{this.state.product.name} </h4>
                    
                    <button type="button" className="btnclass text-uppercase mt-4">
                        <Link to={`/productlist/${ Helper.replaceWhiteSpace(this.state.product.name) }`}>Shop now</Link>
                    </button>
                </div>
           
            </>
        )
    }
}
