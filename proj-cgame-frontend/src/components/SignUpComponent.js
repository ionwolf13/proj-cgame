import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export const SignUpComponent = () => {

    const signInFunction = (e) => {
        e.preventDefault()

        axios.get()
    }


    return(
        <div className="main-cont" id='form-grid'>
            <h1>Sign Up</h1>
            <form className='form-cont' id='su-f' onSubmit={(e) => signInFunction(e)}>
                <div className='input-container'>
                    <label>
                        First Name:
                    </label>
                    <input className='form-input' type='text' placeholder='firstName' name='firstName'/>
                </div>
                
                <div className='input-container'>
                    <label>
                        Middle Name:
                    </label>
                    <input className='form-input' type='text' placeholder='middleName' name='lastName'/>
                </div>
                
                <div className='input-container'>
                    <label>
                        Last Name:
                    </label>
                    <input className='form-input' type='text' placeholder='lastName' name='middleName'/>
                </div>
                
                <div className='input-container'>
                    <label>
                        Username:
                    </label>
                    <input className='form-input' type='text' placeholder='username' name='username'/>
                </div>
                
                <div className='input-container'>
                    <label>
                        Email:
                    </label>
                    <input className='form-input' type='text' placeholder='email' name='email'/>
                </div>
                
                <div className='input-container'>
                    <label>
                        Email Confirmation:
                    </label>
                    <input className='form-input' type='text' placeholder='confirm email' name='emailConfirmation'/>
                </div>
                
                <div className='input-container'>
                    <label>
                        Password:
                    </label>
                    <input className='form-input' type='text' placeholder='password' name='password'/>
                </div>
                
                <div className='input-container'>
                    <label>
                        Password Confirmation:
                    </label>
                    <input className='form-input' type='text' placeholder='confirm password' name='passwordConfirmation'/>
                </div>
                <div className='input-container'>
                    <button type='submit' value='submit'>Submit</button>
                </div>
                
            </form>
            <div>
                <p>Already a member? <Link className='nav-links' to='/signin'>Sign In</Link></p>
            </div>
        </div>
    )
}