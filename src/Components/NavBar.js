import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='logo'>
                <div>Blog Controller</div>
            </div>
            <div className='navSection'>
                <Link className='navLink' to='/'>
                    <span >Posts</span>
                </Link>
                <Link className='navLink' to='/create'>
                    <span >Create Post</span>
                </Link>
                <Link className='navLink' to='/login'>
                    <span >Login</span> 
                </Link>
            </div>

        </div>
    )
}

export default NavBar
