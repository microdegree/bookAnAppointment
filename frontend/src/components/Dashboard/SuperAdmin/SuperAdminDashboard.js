import React, { useState, useEffect } from 'react'
import SuperAdminDashHeader from './SuperAdminDashHeader';
import GetAllUsers from './GetAllUsers/GetAllUsers';
import { Route } from 'react-router-dom'
import AddUser from './AddUser/AddUser';
import ModifyUser from './ModifyUser/ModifyUser';
import DeleteUser from './DeleteUser/DeleteUser';
import ModifyUserModal from './ModifyUser/ModifyUserModal';
import DeleteUserModal from './DeleteUser/DeleteUserModal';

const SuperAdminDashboard = (props) => {

    return (
        <div>
            SuperAdminDashboard Page
            <br />
            <SuperAdminDashHeader logout={props.history} />

            <Route exact path="/superAdminDashboard/getAllUsers" component={GetAllUsers} />
            <Route exact path="/superAdminDashboard/addUser" component={AddUser} routeHistory={props.history} />
            <Route exact path="/superAdminDashboard/modifyUser" component={ModifyUser} />
            <Route exact path="/superAdminDashboard/deleteUser" component={DeleteUser} />
            <Route exact path="/superAdminDashboard/modal/modifyUser" component={ModifyUserModal} />
            <Route exact path="/superAdminDashboard/modal/deleteUser" component={DeleteUserModal} />

        </div>
    )

}

export default SuperAdminDashboard
