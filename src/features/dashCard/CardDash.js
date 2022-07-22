import React,{useState} from 'react'
import Spinner from '../spinner/Spinner'

export default function CardDash(props) {
  const [state,setState] = useState({flag:false})
  const {details} = props
  // let flag = false;
  const loaded = ()=>{
    setState({...state,flag:true})
  }
  const {flag} = state;
  return (
    <div>
      {flag===false?<Spinner/>:<img onLoad={loaded} src={details.image} style={{height:'100px',width:'100px'}}/>}
      
    </div>
  )
}
