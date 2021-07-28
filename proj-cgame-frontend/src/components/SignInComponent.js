import React from 'react'

export const SignInComponent = () => {

    const signInFunction = (e) => {
        e.preventDefault()
    }


    return(
        <div>
            <h1>Sign In</h1>
            <form onSubmit={(e) => signInFunction(e)}>
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
            <p>Sign Up</p>
        </div>
    )
}