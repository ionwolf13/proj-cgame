import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export const SignUpComponent = () => {

    const signInFunction = (e) => {
        e.preventDefault()

        axios.get()
    }


    return(
        <div className="main-cont" id='main-grid'>
            <h1>Sign Up</h1>
            <form className='form-cont' id='su-f' onSubmit={(e) => signInFunction(e)}>
                <label>
                    First Name:
                </label>
                <input type='text' placeholder='firstName' name='firstName'/>
                <label>
                    Middle Name:
                </label>
                <input type='text' placeholder='middleName' name='lastName'/>
                <label>
                    Last Name:
                </label>
                <input type='text' placeholder='lastName' name='middleName'/>
                <label>
                    Username:
                </label>
                <input type='text' placeholder='username' name='username'/>
                <label>
                    Email:
                </label>
                <input type='text' placeholder='email' name='email'/>
                <label>
                    Email Confirmation:
                </label>
                <input type='text' placeholder='emailConfirmation' name='emailConfirmation'/>
                <label>
                    Password:
                </label>
                <input type='text' placeholder='password' name='password'/>
                <label>
                    Password Confirmation:
                </label>
                <input type='text' placeholder='passwordConfirmation' name='passwordConfirmation'/>
                <button type='submit' value='submit'>Submit</button>
            </form>
            <div>
                <p>Already a member? <Link className='nav-links' to='/signin'>Sign In</Link></p>
            </div>
        </div>
    )
}