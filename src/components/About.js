import React, { useEffect, useState } from 'react'
import { db } from '../database/firebaseconfig'
import { collection, getDocs } from 'firebase/firestore'

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
            <div className="about">
                <h1>About</h1>
                {about.map((paragraph) => (
                    <div className="service" key={paragraph.id}>
                        <p>{paragraph.p1}</p>
                        <p>{paragraph.p2}</p>
                        <p>{paragraph.p3}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default About