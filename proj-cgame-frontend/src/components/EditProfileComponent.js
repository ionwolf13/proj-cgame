import React from 'react';
import axios from 'axios';

export const EditProfileComponent = ({currentUser}) => {
   
    const handleEnrollFormFunction = (e) => {
        e.preventDefault()
        
        // let urlAdapter = ""
        // if(auth.role === "stu"){
        //     urlAdapter = `http://localhost:3001/users/`
        //     let user = {
        //         username: username.value,
        //         email: email.value,
        //         email_confirmation: email_confirmation.value,
        //         password: password.value,
        //         password_confirmation: password_confirmation.value
        //         }

        //     Object.entries(user).forEach(arr => {
        //                         if(!user[arr[0]]){
        //                 delete user[arr[0]]
        //     }})          
        //     if(Object.keys(user).length !== 0){
        //         axios({
        //                 method: 'PATCH',
        //                 url: urlAdapter,
        //                 data: { user }
        //             })
        //             .then(res => { 
                        
        //             })
        //     }
        //     else{
        //         return null
        //     }

        // }
        // else{
        //     urlAdapter = `http://localhost:3001/instructors/`
        //     let instructor = {
        //         username: username.value,
        //         email: email.value,
        //         email_confirmation: email_confirmation.value,
        //         password: password.value,
        //         password_confirmation: password_confirmation.value
        //         }
        //         Object.entries(instructor).forEach(arr => {
        //             if(!instructor[arr[0]]){
        //                     delete instructor[arr[0]]
        //                 }
        //         })
        //     if(Object.keys(instructor).length !== 0){
        //         axios({
        //                 method: 'PATCH',
        //                 url: urlAdapter,
        //                 data: { instructor }
        //             })
        //             .then(res => { 
                        
        //             })
        //     }
        //     else{
        //         return null
        //     }
        // }
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