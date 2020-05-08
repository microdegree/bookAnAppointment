import React, { useState } from 'react'
import auth from '../CommonComponents/Auth'
import HeaderHome from '../CommonComponents/HeaderHome';
import Login from './Login';
import SignUp from './SignUp';
import Button from 'react-bootstrap/Button'
const LoginContainer = props => {
    const [loginSelected, setLoginSelected] = useState(true)

    let selectedComponentUI
    if (loginSelected) {
        selectedComponentUI = <Login routeHistory={props.history} />
    } else {
        selectedComponentUI = < SignUp routeHistory={props.history} />
    }

    function setMenuSelected(selected) {
        console.log('selected ', selected)
        setLoginSelected(selected)
    }

    return (
        <div>
            <HeaderHome />
            <br /> <br />

            <Button variant="info" onClick={() => setMenuSelected(true)}>Login</Button>&nbsp;&nbsp;
            <Button variant="info" onClick={() => setMenuSelected(false)}>SignUp Now</Button>

            <br /> <br />

            {selectedComponentUI}
            <br /> <br />
            <Button variant="info" onClick={() => { auth.login(() => { bypassLogin(props, 'superadmin') }); }}>ByPass Super Admin Login</Button>{' '} &nbsp;&nbsp;
            <Button variant="info" onClick={() => { auth.login(() => { bypassLogin(props, 'doctorRole') }); }}>ByPass Admin Login</Button>{' '} &nbsp;&nbsp;
            <Button variant="info" onClick={() => { auth.login(() => { bypassLogin(props, 'patientRole') }); }}>ByPass Consumer Login</Button>{' '}


        </div>

    )

    function bypassLogin(props, loginType) {

        let email = 'shakti@gmail.com'
        if ('superadmin' === loginType) {
            email = 'superadmin@gmail.com'
        } else if ('doctorRole' === loginType) {
            email = 'devishetty@gmail.com'
        }

        const requestObject = {
            "email": email,
            "password": "test"
        }
        auth.userEmail = requestObject.email;

        let responseObj = {}
        fetch('/api/authenticate/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    props.history.push("/");
                }
                console.log(data[0].role)
                responseObj = data[0];
                if ('patientRole' === data[0].role) {
                    auth.authenticated = true;
                    props.history.push("/patientDashboard");
                } else if ('doctorRole' === data[0].role) {
                    auth.authenticated = true;
                    props.history.push("/doctorDashboard");
                } else if ('superadmin' === data[0].role) {
                    auth.authenticated = true;
                    props.history.push("/superAdminDashboard");
                } else {
                    props.history.push("/");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}


export default LoginContainer
