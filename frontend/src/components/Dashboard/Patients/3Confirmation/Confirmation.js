import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Home/CommonComponents/Auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Confirmation = (props) => {
    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#68FFDC' }}><Card.Body>
                    <Card.Title>Confirmation Page</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '250px', width: '300px' }} />
                        </Col>
                        <Col>
                            <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.doctorName}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}> doctorSpecialization : {props.location.projectData.doctorSpecialization}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>doctorDetails  : {props.location.projectData.doctorDetails}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>doctorCharges: {props.location.projectData.doctorCharges}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>doctorExperience: {props.location.projectData.doctorExperience}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>doctorEducation: {props.location.projectData.doctorEducation}</Row>



Appointment Date : {props.location.bookingInfo.appointmentDate} <br />
Total Charges : {props.location.bookingInfo.finalPrice} <br />

                        </Col>
                    </Row>
                    <Button variant="primary"><Link to={{
                        pathname: '/patientDashboard/paymentsGateway',
                        finalPrice: props.location.bookingInfo.finalPrice

                    }} style={{ color: '#fff' }} onClick={confirmBookingAtServer}>Confirm Appointment</Link></Button>

                </Card.Body>
                </Card>
            </center>

        </div >
    )

    function confirmBookingAtServer() {

        fetch('/api/consumer/addNewBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "consumerEmail": auth.userEmail,
                "adminEmail": props.location.projectData.email,
                "projectId": props.location.projectData._id,
                "appointmentDate": props.location.bookingInfo.appointmentDate,
                "finalPrice": props.location.bookingInfo.finalPrice

            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation
