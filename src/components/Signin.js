import React from 'react'

function Signin() {
    return (
        <>
            <form className='SignIn'>
            <label>Username:</label>
            <input type='text' name='title' required></input>
            <label>Password</label>
            <input type='text' name='link' required></input>
            <button onClick={(evt) => {}}>Sign in</button>
            </form>
        </>
    )
}

export default Signin