import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Helper from '../../Shared/Helper'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {

    render() {

        const navList = Helper.navItems.map((item, index) => {
            
            return (

                <>
                    <NavLink key={'nav-'+index} exact={true} activeClassName='is-active' to={`${item.path}/${Helper.replaceWhiteSpace(item.name)}`}>
                        {item.name}
                    </NavLink>
                </>
            )
        })
        return (
            <>
                <Navbar bg="light" expand="lg" sticky="top" className="mainmenu">
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
