import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export const SignInComponent = () => {

    const signInFunction = (e) => {
        e.preventDefault()

        axios.get()
    }


    return(
        <div className="main-cont" id='main-grid'>
            <h1>Sign In</h1>
            <form className='form-cont' id='si-f' onSubmit={(e) => signInFunction(e)}>
                <label>
                    Username:
                </label>
                <input type='text' placeholder='Username'/>
                <label>
                    Password:
                </label>
                <input type='text' placeholder='Password'/>
                <button type='submit' value='submit'>Submit</button>
            </form>
            <p>Not a member? <Link className='nav-links' to='/signup'>Sign Up</Link> </p>
        </div>
    )
}