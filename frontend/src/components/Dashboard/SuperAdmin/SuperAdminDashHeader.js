import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../Home/CommonComponents/Auth'
import Button from 'react-bootstrap/Button'
const SuperAdminDashHeader = (props) => {
    return (
        <div>


            <Button><Link exact to="/superAdminDashboard/getAllUsers" style={{ color: '#fff' }}>Get Users</Link></Button>&nbsp;&nbsp;

            <Button ><Link exact to="/superAdminDashboard/addUser" style={{ color: '#fff' }}>Add Users</Link></Button>  &nbsp;&nbsp;

            <Button ><Link exact to="/superAdminDashboard/modifyUser" style={{ color: '#fff' }}>Modify Users</Link></Button>&nbsp;&nbsp;

            <Button ><Link exact to="/superAdminDashboard/deleteUser" style={{ color: '#fff' }}>Delete Users</Link></Button>&nbsp;&nbsp;


            <Button onClick={() => { auth.logout(() => { props.logout.push("/"); }); }}>Logout</Button>

            <br /><br />

        </div>
    )
}

export default SuperAdminDashHeader
