import { Link, NavLink } from "react-router-dom";
import React from 'react';
import { Form, Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/"> Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-todo" to="/login">Login</Link>
            <Link className="nav-todo" to="/">Show todo</Link>
            <Link className="nav-addTodo" to="/add-todo">Add todo</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavbarMenu;