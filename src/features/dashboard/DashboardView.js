import React, { useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDashboard } from './dashboardSlice'
import CardDash from '../dashCard/CardDash';
import './index.css'
import ReactTooltip from 'react-tooltip';

export default function DashboardView() {
    const {products,loading} = useSelector((state) => state.dashboard)
    const [tooltip, showTooltip] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDashboard())
  }, [])
  const count=1;
// console.log(products)
  return (
    <>
    
     <table>
  <thead>
    <th>Name</th>
    <th>Aquisition Price</th>
    <th>Gain/loss</th>
    <th>Gain/loss $</th>
  </thead>
  {products.map(each=>(
    <tbody>
      <td data-tip={each.name} onMouseEnter={() => showTooltip(true)}
      onMouseLeave={() => {
        showTooltip(false);
        setTimeout(() => showTooltip(true),10);
      }}
      >
      {each.name}</td>
    <td>$null</td>
    <td>+13.5%</td>
    <td>$1.8</td>
    {tooltip && <ReactTooltip effect="solid" />}
    </tbody>
        ))}
</table>
    </>
   
  )
}
