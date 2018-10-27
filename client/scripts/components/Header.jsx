//import npm package
import React from 'react';

//import components and containers
import {Nav, NavItem, Navbar} from 'react-bootstrap';
//import assets


export default class NotFound extends React.Component {
    render(){
        return(
            <div>
                <Navbar inverse  fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#brand">React-Bootstrap</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                        <NavItem eventKey={1} href="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="/contact">
                            Contact us
                        </NavItem>
                        <NavItem eventKey={2} href="/res">
                            Reservation
                        </NavItem>
                        <NavItem eventKey={2} href="/login">
                            Sign in
                        </NavItem>
                        <NavItem eventKey={2} href="reg">
                            Register
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}











