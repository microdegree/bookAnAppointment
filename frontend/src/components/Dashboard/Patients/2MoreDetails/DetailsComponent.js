import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const DetailsComponent = (props) => {

    const [bookingInfo, setBookingInfo] = useState({})

    const onChange = (e) => {

        console.log(e.target.value);

        setBookingInfo({ "appointmentDate": e.target.value, "finalPrice": props.location.projectData.doctorCharges })
    }

    return (

        <div style={{ fontWeight: "bold" }}>
            <center>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', border: '#fff' }}>
                            <br />
                            <center>
                                <Col>
                                    <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '500px', width: '500px' }} />
                                </Col>
                            </center>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '48rem', border: '#fff' }}>
                            <br />

                            <Card.Body>
                                <Card.Text>
                                    <br />
                                    <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.doctorName}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}> doctorSpecialization : {props.location.projectData.doctorSpecialization}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>doctorDetails  : {props.location.projectData.doctorDetails}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>doctorCharges: {props.location.projectData.doctorCharges}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>doctorExperience: {props.location.projectData.doctorExperience}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>doctorEducation: {props.location.projectData.doctorEducation}</Row>

                                    <br />

                                    <Form>

                                        <Form.Group controlId="appointmentDate" onChange={onChange}>
                                            <Form.Label>Appointment Date</Form.Label>
                                            <Form.Control type="date" placeholder="Enter Appointment Date" name="appointmentDate" />
                                        </Form.Group>

                                        <br /> <br /> <br />

                                    </Form>

                                    <Row>
                                        <Link to={{
                                            pathname: '/patientDashboard/confirmationPage',
                                            projectData: props.location.projectData,
                                            bookingInfo: bookingInfo

                                        }}>
                                            &nbsp;  &nbsp;  &nbsp; <Button >Book Appointment</Button></Link>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </center>
        </div>
    )

}

export default DetailsComponent
