import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <ul>
        <li>
        <Link to='/search'>Search</Link>
        </li>
        <li> <Link to='/dashboard'>Dashboard</Link></li>
    </ul>
  )
}
