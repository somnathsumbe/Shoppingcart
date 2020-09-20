import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Helper from '../../Shared/Helper.js';


export default class Carousal extends Component {

    render() {

        return (
            <>
                {/* showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} */}

                {Helper.navItems ?
                    Helper.navItems.map((items, index) => {
                        return (<div key={items.name}>
                            <Carousel showArrows={true} autoPlay showThumbs={false}>
                                <>
                                    {
                                        items.img.map((imgitem, index) => {
                                            return <div>
                                                <img key={index} src={imgitem} />
                                            </div>
                                        })

                                    }
                                    {/* <img src={items.img} /> */}
                                </>
                            </Carousel>
                            <div className="p-5 mb-5">
                                <h4 className="text-center">{items.name} </h4>
                                <button type="button" className="btnclass text-uppercase mt-4">Shop now</button>
                            </div>
                        </div>)
                    })
                    : null

                }
            </>
        )
    }
}
