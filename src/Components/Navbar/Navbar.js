import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Helper from '../../Shared/Helper'

export default class NavBar extends Component {
    render() {
        const navList = Helper.navItems.map((item) => {
            return (
                <>
                    <Nav.Link exact activeClassName="active" to={item.path}>{item.name}</Nav.Link>
                </>
            )
        })
        return (
            <>
                <Navbar bg="light" expand="lg" sticky="top" >
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
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
