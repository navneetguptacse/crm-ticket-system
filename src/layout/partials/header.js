import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand href="#home">
      Navbar
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse className="justify-content-end" id="basic=navbar-nav">
        <Nav>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/dashboard">Ticket</Nav.Link>
            <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
