import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const SignUp = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('signup data ', data);
        updateSignupInfoInServer(data)

    }
    console.log(errors);

    return (
        <div>
            <center>
                <Card style={{ width: '28rem', backgroundColor: '#68FFDC' }}>   <br />
                    <Card.Img variant="top" src="https://www.pngkit.com/png/full/281-2812821_user-account-management-logo-user-icon-png.png" style={{ width: '5rem', }} />
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formBasicSignupFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" name="name" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <Form.Group controlId="formBasicSignupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
                            </Form.Group>
                            {errors.email && errors.email.message}
                            <Form.Group controlId="formBasicSignupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <select name="role" ref={register({ required: true })}>
                                <option value="patientRole">Patients</option>
                                <option value="doctorRole">Doctors</option>
                                <option value="superadmin">SuperAdmin</option>
                            </select>
                            <br /> <br /> <br />
                            <Button variant="primary" type="submit">
                                Submit
              </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )


    function updateSignupInfoInServer(requestObject) {

        auth.userEmail = requestObject.email;

        console.log('email entered ', requestObject.email)
        fetch('/api/authenticate/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {

                if ('patientRole' === requestObject.role) {
                    auth.authenticated = true;
                    console.log('in patient flow signup')
                    props.routeHistory.push("/patientDashboard");
                } else if ('doctorRole' === requestObject.role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/doctorDashboard");
                } else if ('superadmin' === requestObject.role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/superAdminDashboard");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}

export default SignUp
