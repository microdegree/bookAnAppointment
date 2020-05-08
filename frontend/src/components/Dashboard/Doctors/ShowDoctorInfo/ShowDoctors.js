import React, { useState, useEffect } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import auth from '../../../Home/CommonComponents/Auth';
import ProductCardAdmin from './DoctorInfoCardAdmin';

const ShowDoctors = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProjectsFromServer()

    }, [])

    return (
        <CardDeck style={{ margin: 30 }}>
            {products.map(projectData =>
                <ProductCardAdmin key={projectData._id} projectData={projectData} />
            )}
        </CardDeck>
    )

    function fetchProjectsFromServer() {

        console.log('In fetchProjectsFromServer ')
        fetch('/api/admin/getMyProjects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': auth.userEmail })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved ', data)
                setProducts(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default ShowDoctors
