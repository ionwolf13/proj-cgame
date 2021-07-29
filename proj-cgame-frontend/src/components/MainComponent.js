import React from 'react'
import { useState } from 'react';
import { AboutComponent } from './About Component.js';
import { HomeComponent } from './HomeComponent.js';
import { SignInComponent } from './SignInComponent.js';
import { SignUpComponent } from './SignUpComponent.js';
import { NavComponent } from './NavComponent.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export const MainComponent = () => {

    const[currentUser, setCurrentUser] = useState({})
    const[authData, setAuthData] = useState({})


    return(
        <div className="main-cont" id='main-grid'>
            <Router>
                <NavComponent />
                <Switch>
                <React.Fragment>
                    <Route exact path='/home' render={routerProps => <HomeComponent />}/>
                    <Route exact path='/about' render={routerProps => <AboutComponent />}/>
                    <Route exact path='/signin'render={routerProps => <SignInComponent />}/>
                    <Route exact path='/signup'render={routerProps => <SignUpComponent />}/>
                </React.Fragment>
                </Switch>
            </Router>
        </div>
    )
}