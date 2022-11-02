import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import "../CSS/Navigation.css";
import "../CSS/Jumbotron.css";

const Navigation = () => {
    return (
       <Navbar expand="lg" bg="dark"  variant="dark">
        <Navbar.Brand href="/">Commune Urbaine Fianarantsoa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" id='topnav'>
                <Nav.Item><Nav.Link href="/">Accueil</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/organigrames">Organigrames</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/partenaires">Partenaires</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/communes">Communes </Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
       </Navbar>
    ); 
};

export default Navigation;