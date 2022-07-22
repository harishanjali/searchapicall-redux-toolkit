import React from 'react'
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
export default function Card(props) {
    const {details} = props;
    // console.log(details);
    // let price = details.price;
  return (
    <div className='card'>
        <img src={details.image}/>
        <h4 className='name'>{details.name}</h4>
        <h4 className='name'>{Math.floor(details.price).toLocaleString()}</h4>
        <p className='name'>{details.collection}</p>
        <FontAwesomeIcon icon={faLocationDot} className='icon' pull="left"/>
    </div>
  )
}
