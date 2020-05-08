import React from 'react'
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const DeleteUserForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('deleted data ', data);
        deleteUserInServer(data)

    }
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicSignupFullName" >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" defaultValue={props.userData.name} disabled placeholder="Enter Full Name" name="name" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>
            <Form.Group controlId="formBasicSignupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" defaultValue={props.userData.email} disabled placeholder="Enter email" name="email" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
            </Form.Group>
            {errors.email && errors.email.message}
            <Form.Group controlId="formBasicSignupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" defaultValue={props.userData.password} disabled placeholder="Password" name="password" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <select name="role" defaultValue={props.userData.role} disabled ref={register({ required: true })}>
                <option value="patientRole">Patients</option>
                <option value="doctorRole">Doctors</option>
                <option value="superadmin">SuperAdmin</option>
            </select>

            <br /> <br /> <br />
            <Button variant="danger" type="submit">
                Delete User
        </Button>
        </Form>
    )

    function deleteUserInServer(requestObject) {

        //auth.userEmail = requestObject.email;
        requestObject = { ...requestObject, "_id": props.userData._id }

        console.log('delete user email entered ', requestObject.email)
        fetch('/api/superAdmin/deleteUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('successful delete')
                props.handleClose();
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default DeleteUserForm
