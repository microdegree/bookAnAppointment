import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const DoctorsDashHeader = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link exact to="/doctorDashboard">  <Navbar.Brand href="#home">BookAnAppointment</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/doctorDashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="/doctorDashboard/uploadProjectImage"> <Nav.Link href="#features">Add Doctor Info</Nav.Link></Link>
                    <Link to="/doctorDashboard/showProjects"> <Nav.Link href="#features">My Profile</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default DoctorsDashHeader
