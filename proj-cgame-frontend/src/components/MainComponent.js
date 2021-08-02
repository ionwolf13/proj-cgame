import React from 'react'
import { useState, useContext } from 'react';
import { AboutComponent } from './About Component.js';
import { HomeComponent } from './HomeComponent.js';
import { SignInComponent } from './SignInComponent.js';
import { SignUpComponent } from './SignUpComponent.js';
import { NavComponent } from './NavComponent.js';
import { ProfileComponent } from './ProfileComponent.js';
import { EditProfileComponent } from './EditProfileComponent.js';
import { GamesComponent } from './GamesComponent.js';
import { GameRoomsContainer } from './GameRoomContainer.js';
import { GameRoomComponent } from './GameRoomComponent.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthContext } from '../App.js';


export const MainComponent = ({games, setGames, setAuthData}) => {

    const[currentUser, setCurrentUser] = useState({currentSession: {},newData: {username: "", first_name: "", middle_name: "", last_name: "", age: 20, image: "", hobbies: "", email: "" , friends_id: 0}})

    const auth = useContext(AuthContext)

    return(
        <div className="main-cont" id='sub-grid-cont'>
            <Router>
                <NavComponent setAuthData={setAuthData}/>
                <Switch>
                <React.Fragment>
                    {(auth.authLGI === false)? 
                    <span>
                        <Route exact path='/home' render={routerProps => <HomeComponent />}/>
                        <Route exact path='/about' render={routerProps => <AboutComponent games={games}/>}/>
                        <Route exact path='/signin'render={routerProps => <SignInComponent setAuthData={setAuthData} setCurrentUser={setCurrentUser}/>}/>
                        <Route exact path='/signup'render={routerProps => <SignUpComponent setAuthData={setAuthData}/>}/>
                    </span>
                    : 
                    <span>
                        <Route exact path='/profile' render={routerProps => <ProfileComponent currentUser={currentUser}/>} />
                        <Route exact path='/editProfile' render={routerProps => <EditProfileComponent currentUser={currentUser}/>} />
                        <Route exact path='/games' render={routerProps => <GamesComponent currentUser={currentUser} setCurrentUser={setCurrentUser} games={games}/>} />
                        <Route exact path='/gameRooms' render={routerProps => <GameRoomsContainer />} />
                        <Route exact path='/userCurrentGame' render={ routerProps => <GameRoomComponent currentUser={currentUser}/>} />
                    </span>
                    }
                    
                </React.Fragment>
                </Switch>
            </Router>
        </div>
    )
}