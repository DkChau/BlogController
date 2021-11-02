import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBar'>
            <Link to='/'>
                <span className='navLink'>Go Home</span>
            </Link>
            <Link to='/create'>
                <span className='navLink'>Create Post</span>
            </Link>
        </div>
    )
}

export default NavBar
