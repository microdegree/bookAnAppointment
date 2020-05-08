import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import DeleteUserForm from './DeleteUserForm';

const DeleteUserModal = (props) => {

    const [show, setShow] = useState(true)

    const handleClose = () => {
        console.log('inHandle close')
        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DeleteUserForm userData={props.location.userData} handleClose={handleClose} />
            </Modal.Body>
        </Modal>
    )
}

export default DeleteUserModal
