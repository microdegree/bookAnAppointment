import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModifyUserForm from './ModifyUserForm';

const ModifyUserModal = (props) => {

    const [show, setShow] = useState(true)

    const handleClose = () => {
        console.log('inHandle close')
        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModifyUserForm userData={props.location.userData} handleClose={handleClose} />
            </Modal.Body>
        </Modal>
    )
}

export default ModifyUserModal
