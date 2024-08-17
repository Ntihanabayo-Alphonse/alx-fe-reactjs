import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const linkStyles = {
        marginRight: '36px'
    }

    return (
            <nav>
                <Link style={linkStyles} to='/'>Home</Link>
                <Link style={linkStyles} to='/about'>About</Link>
                <Link style={linkStyles} to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
    )
}

export default Navbar