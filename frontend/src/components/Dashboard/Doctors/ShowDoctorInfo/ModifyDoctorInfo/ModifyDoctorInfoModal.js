import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModifyProductForm from './ModifyDoctorInfoForm';

const ModifyDoctorInfoModal = (props) => {

    const [show, setShow] = useState(true)

    const handleClose = () => {
        console.log('inHandle close')
        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modify Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModifyProductForm projectData={props.location.projectData} handleClose={handleClose} />
            </Modal.Body>
        </Modal>
    )
}

export default ModifyDoctorInfoModal
