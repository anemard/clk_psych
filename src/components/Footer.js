import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='footer'>
                <ul className='footer-list'>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/services'>services</Link></li>
                    <li><Link to='/publications'>publications</Link></li>
                    <li><Link to='/etc'>etc</Link></li>
                </ul>
                <ul className='footer-list'>
                    <li><Link to='/signin'>Admin</Link></li>
                    <li>Website built & designed by an emard</li>
                </ul>
            </div>
        </>
    )
}

export default Footer