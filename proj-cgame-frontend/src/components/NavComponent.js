import React from 'react'
import {Link} from 'react-router-dom'

export const NavComponent = () => {

    return(
        // <div className="main-cont" id='main-grid'>
            <nav className="main-cont" id='main-grid'>
                    <ul className='navigation-list'>
                        <li> <Link className='nav-links' to='/home'> Home </Link></li>
                        <li> <Link className='nav-links' to='/about'> About </Link> </li>
                        <li> <Link className='nav-links' to='/signin'> Sign In </Link> </li>
                        <li> <Link className='nav-links' to='/signup'> Sign Up </Link> </li>
                    </ul>
            </nav>
            
        // </div>
    )
}