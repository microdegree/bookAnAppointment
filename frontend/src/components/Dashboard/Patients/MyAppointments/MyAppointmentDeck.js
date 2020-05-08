import React, { useState, useEffect } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import auth from '../../../Home/CommonComponents/Auth';
import MyOrdersCard from './MyAppointmentsCard'

const MyAppointmentDeck = () => {
    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetchBookingsFromServer()

    }, [])

    return (
        <div>
            <CardDeck style={{ margin: 30 }}>
                {booking.map(bookingData =>
                    <MyOrdersCard key={bookingData._id} bookingData={bookingData} />
                )}
            </CardDeck>
        </div>
    )

    function fetchBookingsFromServer() {

        console.log('In fetchBookingsFromServer ')
        fetch('/api/admin/getMyBookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'consumerEmail': auth.userEmail })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved ', data)
                setBooking(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default MyAppointmentDeck
