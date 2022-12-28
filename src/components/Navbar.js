import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>CLK Psychotherapy</div>
                <ul className='navbar-list'>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/services'>services</Link></li>
                    <li><Link to='/publications'>publications</Link></li>
                    <li><Link to='/etc'>etc</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar