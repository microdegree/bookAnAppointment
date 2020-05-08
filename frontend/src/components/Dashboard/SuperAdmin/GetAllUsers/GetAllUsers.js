import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
const GetAllUsers = () => {

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        
               <div>
               <center> 
               <Card style={{ width: '38rem' }}>
               <Card.Body>
               <Card.Title>Get Users </Card.Title>
               <Table striped bordered hover size="sm">
                   <thead>
                       <tr>
                       <th>User Name</th>
                       <th>Email</th>
                       <th>Role</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                       <td>
                           <ol>
                           {allUsers.map(user =>
                            <li key={user._id}>{user.name}</li>
                            )}
                           </ol>
                       </td>
                       <td>
                       {allUsers.map(user =>
                            <li key={user._id}> {user.email}</li>
                            )}
                       </td>
                       <td>
                       {allUsers.map(user =>
                            <li key={user._id}> {user.role}</li>
                            )}
                       </td>
                       </tr>
                   </tbody>
               </Table>
               </Card.Body>
               </Card>
               </center> 
           </div>
    )

    async function getAllUsers() {
        console.log('In SUperAdmin getAllUsers ')
        fetch('/api/superAdmin/getAllUsers')
            .then(response => response.json())
            .then(data => {
                setAllUsers(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default GetAllUsers
