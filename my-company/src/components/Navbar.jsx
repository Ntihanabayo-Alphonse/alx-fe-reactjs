import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const linkStyles = {
        marginRight: '36px'
    }

    return (
        <div>
            <nav>
                <Link style={linkStyles} to='/home'>Home</Link>
                <Link style={linkStyles} to='/about'>About</Link>
                <Link style={linkStyles} to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar