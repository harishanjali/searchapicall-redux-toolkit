import React,{useState,useEffect} from 'react'
import Spinner from '../spinner/Spinner'
import ReactTooltip from 'react-tooltip';

import './index.css'

export default function CardDash(props) {
  const [flag,setState] = useState(true)
  const {details} = props
  const loaded = ()=>{
    setState(false)
    console.log('handled')
  }
// console.log(details)
  return (
    <>
    
    </>
    
  )
}
