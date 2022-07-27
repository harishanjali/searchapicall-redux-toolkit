import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Header() {
  return (
    <ul>
        <li>
        <Link className='link' to='/search'>Search</Link>
        </li>
        <li> <Link className='link' to='/dashboard'>Dashboard</Link></li>
    </ul>
  )
}
