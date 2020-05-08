import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const PatientDashHeader = (props) => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Link exact to="/patientDashboard">  <Navbar.Brand href="#home">BookAnAppointment</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/patientDashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="/patientDashboard/myOrders"> <Nav.Link href="#features">My Appointments</Nav.Link></Link>

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

export default PatientDashHeader
