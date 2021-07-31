import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../App'

export const NavComponent = ({setAuthData}) => {

    const auth = useContext(AuthContext)

    const handleSignOut = (e) => {
        e.preventDefault()
        setAuthData({authLGI: false})
    }

    return(
            <nav className="main-cont" id=''>
                {(auth.authLGI === false)? 
                    <ul className='navigation-list'>
                    
                        <li> <Link className='nav-links' to='/home'> Home </Link></li>
                        <li> <Link className='nav-links' to='/about'> About </Link> </li>
                        <li> <Link className='nav-links' to='/signin'> Sign In </Link> </li>
                        <li> <Link className='nav-links' to='/signup'> Sign Up </Link> </li>
                    </ul>
                    :
                    <ul className='navigation-list'>
                        <li> <Link className='nav-links' to='/profile'> Profile </Link></li>
                        <li> <Link className='nav-links' to='/editProfile'> Edit Profile </Link></li>
                        <li> <Link className='nav-links' to='/games'> games </Link> </li>
                        <li onClick={e => handleSignOut(e)}> <Link className='nav-links' to='/signout'> Sign Out </Link> </li>
                    </ul>    
                }    
            </nav>
    )
}