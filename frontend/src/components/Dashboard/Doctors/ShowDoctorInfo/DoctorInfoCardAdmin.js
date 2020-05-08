import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const DoctorInfoCardAdmin = (props) => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={'../' + props.projectData.imageName} style={{ padding: 10 }} />
                <Card.Body>
                    <Card.Title>{props.projectData.doctorName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.projectData.doctorSpecialization}</Card.Subtitle>
                    <br /><br />
                    <Link to={{
                        pathname: '/doctorDashboard/showProjects/modal/modifyProject',
                        projectData: props.projectData
                    }}><Button variant="primary">Modify Details</Button></Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"> Charges per Visit : ₹ {props.projectData.doctorCharges}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default DoctorInfoCardAdmin
