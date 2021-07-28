import React from 'react'
import { useState } from 'react';
import { AboutComponent } from './About Component.js';
import { HomeComponent } from './HomeComponent.js';
import { SignInComponent } from './SignInComponent.js';

export const MainComponent = () => {

    const[currentUser, setCurrentUser] = useState({})
    const[authData, setAuthData] = useState({})


    return(
        <div>
            <h1>Main Component</h1>
            <HomeComponent />
            <AboutComponent />
            <SignInComponent />

        </div>
    )
}