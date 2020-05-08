import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const AddDoctorInfo = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToAddInfo(data)

        props.history.push('./doctorDashboard')
    }
    console.log(errors);

    return (
        <div>
            <center>
                <Card style={{ width: '48rem' }}>

                    <Card.Body>

                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="doctorName">
                                <Form.Label>Doctor Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Doctor name" name="doctorName" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="doctorSpecialization">
                                <Form.Label>Doctor Specialization</Form.Label>
                                <Form.Control type="text" placeholder="Enter Doctor Specialization" name="doctorSpecialization" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="doctorDetails">
                                <Form.Label>Doctor Details</Form.Label>
                                <Form.Control type="text" placeholder="Doctor Details" name="doctorDetails" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="doctorCharges">
                                <Form.Label>Doctor Charges</Form.Label>
                                <Form.Control type="number" placeholder="Enter Charges in Rs" name="doctorCharges" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="doctorExperience">
                                <Form.Label>Doctor Experience</Form.Label>
                                <Form.Control type="text" placeholder="Enter doctor Experience" name="doctorExperience" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="doctorEducation">
                                <Form.Label>Doctor Education</Form.Label>
                                <Form.Control type="text" placeholder="Enter Doctor Education Details" name="doctorEducation" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

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

    function callServerToAddInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, "imageName": props.location.fileNameImage }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/addProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while adding Info ', error))

    }

}

export default AddDoctorInfo
