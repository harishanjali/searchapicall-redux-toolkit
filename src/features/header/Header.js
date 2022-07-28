import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import ShowModal from '../allModal/Modal'

export default function Header(props) {
  const {showModal} = props;
  return (
    <ul>
        <li>
        <Link className='link' to='/search'>Search</Link>
        </li>
        <li> <Link className='link' to='/dashboard'>Dashboard</Link></li>
        <li>
        <button type="button" className="" onClick={()=>showModal('modal1')}>
        Modal 1
        </button>
        </li>
        <li>
        <button type="button" className="" onClick={()=>showModal('modal2')}>
        Modal 2
        </button>
        </li>
        <li>
        <button type="button" className="" data-bs-toggle="modal" data-bs-target="#modal3">
        Modal 3
        </button>
        </li>
    </ul>
  )
}
