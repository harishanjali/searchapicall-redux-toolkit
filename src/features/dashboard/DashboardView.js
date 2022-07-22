import React, { useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDashboard } from './dashboardSlice'
import CardDash from '../dashCard/CardDash';

export default function DashboardView() {
    const {products,loading} = useSelector((state) => state.dashboard)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDashboard())
  }, [])
const alert = ()=>{
    console.log('loaaded')
}
  return (
    <div>
        {products.map(each=>(
            <CardDash details={each}/>
        ))}
    </div>
  )
}
