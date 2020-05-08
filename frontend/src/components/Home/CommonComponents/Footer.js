import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <footer >
            <Row style={{ 'background-color': '#D6EAF8', 'padding': '25px' }}>
                <Col>
                    <h3>BookAnAppointment</h3>
                </Col>
                <Col>
                    <h4>Useful Links</h4>
                    <ul><li><a href="/">Home</a></li>
                        <li><a href="/about">About us</a></li>
                    </ul>
                </Col>
                <Col>
                    <h4>Contact Us</h4>
                    <p>Sooraj <br></br>
                        MCA Final Year<br></br>
                        NMAMIT , Nitte<br></br>
                        <strong>Phone:</strong> +91 987 654 3210<br></br>
                        <strong>Email:</strong> sooraj@gmail.com<br></br>
                    </p>
                </Col>
            </Row>
        </footer >
    )
}

export default Footer
