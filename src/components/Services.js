import React, { useEffect, useState } from 'react'
import { db } from '../database/firebaseconfig'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../database/firebaseconfig'

function Services() {
    const [services, setServices] = useState([]);
    const colRef = collection(db, "clk-services")
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    } )

    const collectServiceData = () => {
        let data = []
        getDocs(colRef)
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => data.push({ ...doc.data(), id: doc.id }))
            setServices(data)
          })
          .catch(err => {
            console.log(err.message)
          })
    }

    const addServiceForm = document.querySelector('.addService')
    const addServiceClick = (evt) => {
        evt.preventDefault()
        addDoc(colRef, {
             service: addServiceForm.service.value
        })
        .then(() => {
            collectServiceData()
            addServiceForm.reset()
        })
    }

    const deleteServiceClick = (evt, id) => {
        evt.preventDefault()
        const docRef = doc(db, "clk-services", id)
        deleteDoc(docRef)
        .then(() => {
            collectServiceData()
        })
    }


    useEffect(() => {
        collectServiceData()
    }, [])

    return (
        <>
        <div className='services-container'>
            <h1>Services</h1>
            {user ? (
                        <div>
                            <form className='addService'>
                                <label>Service:</label>
                                <input type='text' name='service' required></input>
                                <button onClick={(evt) => {addServiceClick(evt)}}>Add Service</button>
                            </form>
                            <ul className="allServicesContainer">
                                {services.map((service) => (
                                    <div key={service.id}>
                                        <li className="service" >{service.service}</li>
                                        <button onClick={(evt) => {deleteServiceClick(evt, service.id)}}>remove</button>
                                    </div>
                                ))}
                            </ul>
                        </div>
                ) : (
                        <ul className="allServicesContainer">
                            {services.map((service) => (
                                <li className="service" key={service.id}>{service.service}</li>
                            ))}
                        </ul>
            )}
        </div>
        </>
    )
}

export default Services