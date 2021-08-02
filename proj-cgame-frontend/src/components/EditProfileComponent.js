import React from 'react';
import axios from 'axios';

export const EditProfileComponent = ({currentUser}) => {
   
    const handleEnrollFormFunction = (e) => {
        e.preventDefault()
        let urlAdapter = `http://localhost:3001/users/${currentUser.newData.id}`
        let user = {
            username: e.target.username.value,
            email: e.target.email.value,
            email_confirmation: e.target.email_confirmation.value,
            password: e.target.password.value,
            password_confirmation: e.target.password_confirmation.value
            }

        Object.entries(user).forEach(arr => {
            if(!user[arr[0]]){
                    delete user[arr[0]]
                }
        })

        console.log(user)
        if(Object.keys(user.length !== 0)){
            axios({
                    method: 'PATCH',
                    url: urlAdapter,
                    data: { user }
                })
                .then(res => { 
                    
                })
        }
        else{
            return null
        }
        e.target.reset()
    }
        

    return(

        <div className="main-cont" id='edit-form-grid'>
                <form  className='form-cont' id='si-f' onSubmit={e => handleEnrollFormFunction(e)}>
                        <div className='input-container'>
                            <label>Username</label>
                            <input className='form-input' type='text' label='Username' name='username' /><br></br>
                        </div>
                        <div className='input-container'>
                            <label>Email</label>
                            <input className='form-input' type='text' label='Email' name='email' /><br></br>
                        </div>
                        <div className='input-container'>
                            <label>Confirm Email</label>
                            <input className='form-input' type='text' label='Email' name='email_confirmation' /><br></br>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input className='form-input' type='password' label='Password' name='password'/><br></br>
                        </div>
                        <div className='input-container'>
                            <label>Confirm Password</label>
                            <input className='form-input' type='password' label='Confirm Password' name='password_confirmation'/><br></br>
                        </div>
                        <div className='input-container'>
                            <button type='submit' value='submit'>Submit</button>
                        </div>
                    </form>
        </div>
    )
}