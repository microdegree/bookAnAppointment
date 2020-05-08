import React from 'react'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const HeaderHome = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link exact to="/">  <Navbar.Brand href="#home">BookAnAppointment</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="/about"> <Nav.Link href="#features">About</Nav.Link></Link>
                    <Link to="/login"><Nav.Link href="#pricing">Login</Nav.Link></Link><br />
                </Nav>
            </Navbar>
        </div>
    )
}

export default HeaderHome
