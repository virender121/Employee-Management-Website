import React from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <>
       <nav className = 'navbar'>
  <ul>
  <li>
  <Link to = '/' >Signin</Link>
  </li>
  <li>
  <Link to = '/Signup' >Signup</Link>
  </li>
  <li>
  
  <Link to = '/Dashboard' >Dashboard</Link>
  </li>
  </ul>
  </nav>
  </>
    </div>
  )
}

export default Navbar
