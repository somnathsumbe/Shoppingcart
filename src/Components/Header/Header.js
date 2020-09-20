import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row p-3">
                    <div className="col-md-11">
                        <a href="/" aria-label="SHOP Home">SHOP</a>
                    </div>
                    <div className="col-md-1">
                        <FontAwesomeIcon icon={faCartPlus} pull="right" />
                    </div>
                </div>

            </div>
        )
    }
}
