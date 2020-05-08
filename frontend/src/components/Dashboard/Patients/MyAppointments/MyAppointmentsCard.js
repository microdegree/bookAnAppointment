import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const MyAppointmentsCard = (props) => {

    const [vendorDetails, setVendorDetails] = useState({})

    useEffect(() => {
        fetchUserInfoFromServer()
    }, [])

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#68FFDC', margin: 25 }}>
                <Card.Body>
                    <Card.Title className="bg-primary" style={{ height: '30px', color: '#fff' }}>{vendorDetails.doctorName}</Card.Title>
                    <Card.Text style={{ color: '#ad0000', fontWeight: "bold" }}>
                        Appointment Details
                    </Card.Text>
                    <Card.Footer className="text-muted">  Appointment Date : {props.bookingData.appointmentDate} </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

    function fetchUserInfoFromServer() {

        console.log('In fetchBookingsFromServer ')

        //reuse the same login api to get userdata
        fetch('/api/consumer/getProductInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'productId': props.bookingData.projectId })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved consumer', data)
                setVendorDetails(data[0])
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}

export default MyAppointmentsCard
