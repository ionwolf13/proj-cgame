import React from 'react'
import { useState } from 'react';
import { AboutComponent } from './About Component.js';
import { HomeComponent } from './HomeComponent.js';
import { SignInComponent } from './SignInComponent.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export const MainComponent = () => {

    const[currentUser, setCurrentUser] = useState({})
    const[authData, setAuthData] = useState({})


    return(
        <div className="main-cont" id='main-grid'>
            <h1>Main Component</h1>
            <Router>

            </Router>
            <HomeComponent />
            <AboutComponent />
            <SignInComponent />

        </div>
    )
}