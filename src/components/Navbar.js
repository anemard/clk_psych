import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <h1><img src={logo} className="logo" /></h1>
                <ul className='navbar-list'>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/services'>services</Link></li>
                    <li><Link to='/publications'>publications</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar