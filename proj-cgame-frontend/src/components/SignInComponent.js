import React, { useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

export const SignInComponent = ({setAuthData, setCurrentUser}) => {
    
    let history = useHistory();

    const signInFunction = (e) => {
        e.preventDefault()

        let user = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        axios({
            method: 'POST',
            url: 'http://localhost:3001/signin',
            data: { user: {
                username: e.target.username.value,
                password: e.target.password.value
                }
            
            }
        })     
        .then(res => {
            if(res.data.token){
                    localStorage.token = res.data.token
                    let newData = JSON.parse(res.data.user)
                    history.push('/profile')
                    setAuthData({authLGI: true})
                    setCurrentUser({newData})
                    console.log(newData)
            }
            else{
                    alert('Invalid Login Info')
            }
        })
        e.target.reset()
        }


    return(
        <div className="main-cont" id='main-grid'>
            <h1>Sign In</h1>
            <form className='form-cont' id='si-f' onSubmit={(e) => signInFunction(e)}>
                <label>
                    Username:
                </label>
                <input type='text' name='username'/>
                <label>
                    Password:
                </label>
                <input type='password' name='password'/>
                <button type='submit' value='submit'>Submit</button>
            </form>
            <p>Not a member? <Link className='nav-links' to='/signup'>Sign Up</Link> </p>
        </div>
    )
}