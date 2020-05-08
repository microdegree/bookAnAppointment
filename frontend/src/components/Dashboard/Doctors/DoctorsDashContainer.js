import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import DoctorsDashHeader from './CommonComponents/DoctorsDashHeader';
import DoctorsDashUI from './DoctorsDashHome/DoctorsDashUI';
import AddDoctorInfo from './AddDoctorInfo/AddDoctorInfo';
import { Route } from "react-router-dom";
import UploadDoctorImage from './AddDoctorInfo/UploadDoctorImage';
import ShowProducts from './ShowDoctorInfo/ShowDoctors';
import ModifyDoctorInfoModal from './ShowDoctorInfo/ModifyDoctorInfo/ModifyDoctorInfoModal';

const DoctorsDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <DoctorsDashHeader logout={props.history} />

            <Route exact path="/doctorDashboard" component={DoctorsDashUI} />
            <Route exact path="/doctorDashboard/addProduct" component={AddDoctorInfo} />
            <Route exact path="/doctorDashboard/uploadProjectImage" component={UploadDoctorImage} />

            <Route exact path="/doctorDashboard/showProjects" component={ShowProducts} />
            <Route exact path="/doctorDashboard/showProjects/modal/modifyProject" component={ModifyDoctorInfoModal} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/users/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default DoctorsDashContainer
