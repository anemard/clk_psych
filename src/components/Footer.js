import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../database/firebaseconfig'

function Footer() {

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    } )

    const logout = async (evt) => {
        evt.preventDefault()
        await signOut(auth)
    }

    return (
        <>
            <div className='footer'>
                <div className='footer-content'>
                    <ul className='footer-list'>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/services'>services</Link></li>
                        <li><Link to='/publications'>publications</Link></li>
                        <li><Link to='/contact'>contact</Link></li>
                    </ul>
                    <ul className='footer-list'>
                        {user ? (
                                <li><button onClick={logout}>Sign Out</button></li>
                            ) : (
                                <li><Link to='/signin'>Admin</Link></li>
                        ) }
                        <li>Website built & designed by an emard</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer