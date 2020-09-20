import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Helper from '../../Shared/Helper'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        const navList = Helper.navItems.map((item) => {
            return (
                <>
                    <Nav.Link activeClassName={item.isActive ? 'active' : ''} producttype={item.name}>
                        <Link to={item.path}>{item.name}</Link>
                    </Nav.Link>
                </>
            )
        })
        return (
            <>
                <Navbar bg="light" expand="lg" sticky="top" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center" >
                            {navList}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
