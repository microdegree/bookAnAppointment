import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModifyDoctorInfoForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToUpdateInfo(data)

        props.handleClose()
    }
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="doctorName">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control defaultValue={props.projectData.doctorName} type="text" placeholder="Enter Doctor name" name="doctorName" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="doctorSpecialization">
                <Form.Label>Doctor Specialization</Form.Label>
                <Form.Control defaultValue={props.projectData.doctorSpecialization} type="text" placeholder="Enter Doctor Specialization" name="doctorSpecialization" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="doctorDetails">
                <Form.Label>Doctor Details</Form.Label>
                <Form.Control defaultValue={props.projectData.doctorDetails} type="text" placeholder="Doctor Details" name="doctorDetails" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="doctorCharges">
                <Form.Label>Doctor Charges</Form.Label>
                <Form.Control defaultValue={props.projectData.doctorCharges} type="number" placeholder="Enter Charges in Rs" name="doctorCharges" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="doctorExperience">
                <Form.Label>Doctor Experience</Form.Label>
                <Form.Control defaultValue={props.projectData.doctorExperience} type="text" placeholder="Enter doctor Experience" name="doctorExperience" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="doctorEducation">
                <Form.Label>Doctor Education</Form.Label>
                <Form.Control defaultValue={props.projectData.doctorEducation} type="text" placeholder="Enter Doctor Education Details" name="doctorEducation" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <br /> <br /> <br />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

    function callServerToUpdateInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, 'imageName': props.projectData.imageName }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/modifyProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while modify project Info ', error))

    }

}

export default ModifyDoctorInfoForm
