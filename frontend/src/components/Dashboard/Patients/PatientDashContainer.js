import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import PatientDashUI from './1DashboardHome/PatientDashUI';
import PatientDashHeader from './0CommonComponents/PatientDashHeader'
import DetailsComponent from './2MoreDetails/DetailsComponent';
import { Route } from "react-router-dom";
import Confirmation from './3Confirmation/Confirmation';
import PaymentGateway from './4PaymentGateway/PaymentGateway';
import MyAppointments from './MyAppointments';

const PatientDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <PatientDashHeader logout={props.history} />
            Hello {userInDash.name}
            <br /><br /><br /><br />
            <Route exact path="/patientDashboard" component={PatientDashUI} />

            <Route exact path="/patientDashboard/moreDetails" component={DetailsComponent} />
            <Route exact path="/patientDashboard/confirmationPage" component={Confirmation} />
            <Route exact path="/patientDashboard/paymentsGateway" component={PaymentGateway} />
            <Route exact path="/patientDashboard/myOrders" component={MyAppointments} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default PatientDashContainer
