import React, { useEffect, useState } from 'react'
import { db } from '../database/firebaseconfig'
import { collection, getDocs } from 'firebase/firestore'
import { BrowserRouter } from 'react-router-dom'
import headshot from '../img/Cary-Klemmer-BW.jpeg'

function About() {
    const [about, setAbout] = useState([]);
    const colRef = collection(db, "clk-about")

    const getAbout = () => {
        let data = []
        getDocs(colRef)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => data.push({ ...doc.data(), id: doc.id }))
                setAbout(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getAbout()
    }, [])

    return (
        <>
            <div className="about-container">
                <div className='about'>
                    <div className='headshot-div'><img src={headshot} className="headshot" /></div>
                {about.map((paragraph) => (
                    <div className="about-content" key={paragraph.id}>
                        <h1>Cary Klemmer, PhD, LCSW</h1>
                        <p>{paragraph.p1}</p>
                        <p>{paragraph.p2}</p>
                        <p>{paragraph.p3}</p>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default About