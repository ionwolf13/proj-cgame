import React from 'react'

export const ProfileComponent = ({currentUser}) => {
    console.log(currentUser)
    return(
        <div className="main-cont" id='profile-grid'>
            <div className='second-cont' id='pri-sec'>
                <h1>Profile </h1>
                <h2>{currentUser.newData.first_name} {currentUser.newData.middle_name} {currentUser.newData.last_name}</h2>
                <img src={currentUser.newData.image} alt='User Profile Image'/>
                <p>Username: {currentUser.newData.username}</p>
                <p>Hobbies: {currentUser.newData.hobbies}</p>
                <p>Exp: {currentUser.newData.experience}</p>
                <p>Rank: {currentUser.newData.rank}</p>
            </div>
            <div className='second-cont' id='sec-sec'>
                <h2>Last Games Played</h2>
            </div>
        </div>
    )
}