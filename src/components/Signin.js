import React, { useState } from 'react'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import { auth } from '../database/firebaseconfig'


function Signin() {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    } )

    const login = async (evt) => {
        evt.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            console.log(user)
            console.log(loginEmail)
        }
        catch(error) {
            console.log(error.message)
        }
    }

    const logout = async (evt) => {
        evt.preventDefault()
        await signOut(auth)
    }

    return (
        <>
        <div className='signin-container'>
            {!user ? (
                <form className='SignIn'>
                    <label>Sign In</label>
                    <input type='email' placeholder='email' required onChange={(evt) => {
                        setLoginEmail(evt.target.value)
                    }}></input>
                    <input type='password' placeholder='password' required onChange={(evt) => {
                        setLoginPassword(evt.target.value)
                    }}></input>
                    <button onClick={login}>Sign In</button>
                </form>
            ) : (
                <>
                <h1>Welcome {user.email}</h1>
                <button onClick={logout}>Sign Out</button>
                </>
            )}
                {/* <form className='SignIn'>
                    <label>Sign In</label>
                    <input type='email' placeholder='email' required onChange={(evt) => {
                        setLoginEmail(evt.target.value)
                    }}></input>
                    <input type='password' placeholder='password' required onChange={(evt) => {
                        setLoginPassword(evt.target.value)
                    }}
                ></input>
                    <button onClick={(evt) => {login(evt)}}>Sign in</button>
                </form> */}
        </div>
        </>
    )
}

export default Signin