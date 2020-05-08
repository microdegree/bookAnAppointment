import React from 'react'
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModifyUserForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('modified data ', data);
        updateSignupInfoInServer(data)

    }
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicSignupFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" defaultValue={props.userData.name} placeholder="Enter Full Name" name="name" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>
            <Form.Group controlId="formBasicSignupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" defaultValue={props.userData.email} placeholder="Enter email" name="email" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
            </Form.Group>
            {errors.email && errors.email.message}
            <Form.Group controlId="formBasicSignupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" defaultValue={props.userData.password} placeholder="Password" name="password" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <select name="role" defaultValue={props.userData.role} ref={register({ required: true })}>
                <option value="patientRole">Patients</option>
                <option value="doctorRole">Doctors</option>
                <option value="superadmin">SuperAdmin</option>
            </select>

            <br /> <br /> <br />
            <Button variant="info" type="submit">
                Modify
                </Button>
        </Form>
    )

    function updateSignupInfoInServer(requestObject) {

        //auth.userEmail = requestObject.email;
        requestObject = { ...requestObject, "_id": props.userData._id }

        console.log('modify user email entered ', requestObject.email)
        fetch('/api/superAdmin/modifyUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('successful update')
                //props.history.push("/superAdminDashboard/getAllUsers");
                props.handleClose();
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default ModifyUserForm
