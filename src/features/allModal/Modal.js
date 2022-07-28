import React from 'react'
import Modal1 from '../../modals/Modal1'
import Modal2 from '../../modals/Modal2'


export default function Modal(props) {
    const {id,isactive,closeModal} = props
    // console.log(isactive);
  return (
    <>
    {isactive && id==='modal1'?<Modal1 closeModal={closeModal}/>:null}
    {isactive && id==='modal2'?<Modal2 closeModal={closeModal}/>:null}</>
    
  )
}
