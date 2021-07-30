import React from 'react'
import { useState, useContext } from 'react';
import { AboutComponent } from './About Component.js';
import { HomeComponent } from './HomeComponent.js';
import { SignInComponent } from './SignInComponent.js';
import { SignUpComponent } from './SignUpComponent.js';
import { NavComponent } from './NavComponent.js';
import { ProfileComponent } from './ProfileComponent.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthContext } from '../App.js';

export const MainComponent = ({games, setGames, setAuthData}) => {

    const[currentUser, setCurrentUser] = useState({})

    const auth = useContext(AuthContext)

    return(
        <div className="main-cont" id='main-grid'>
            <Router>
                <NavComponent setAuthData={setAuthData}/>
                <Switch>
                <React.Fragment>
                    {(auth.authLGI === false)? 
                    <span>
                        <Route exact path='/home' render={routerProps => <HomeComponent />}/>
                        <Route exact path='/about' render={routerProps => <AboutComponent />}/>
                        <Route exact path='/signin'render={routerProps => <SignInComponent setAuthData={setAuthData}/>}/>
                        <Route exact path='/signup'render={routerProps => <SignUpComponent setAuthData={setAuthData}/>}/>
                    </span>
                    : 
                    <div>
                        <Route exact path='/profile' render={routerProps => <ProfileComponent />} />
                    </div>
                    }
                    
                </React.Fragment>
                </Switch>
            </Router>
        </div>
    )
}