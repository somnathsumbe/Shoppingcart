import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row py-4">
                    <div className=" col-sm-6 col-md-12">
                        <div className="logo text-center">
                            <a href="/" aria-label="SHOP Home">SHOP</a>
                            <FontAwesomeIcon icon={faCartPlus} pull="right" size='2x' />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
