import React, { useEffect,useMemo,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDashboard } from './dashboardSlice'
import CardDash from '../dashCard/CardDash';
import './index.css'
import ReactTooltip from 'react-tooltip';
import { useTable,useSortBy } from 'react-table'

export default function DashboardView() {
    const {products,loading} = useSelector((state) => state.dashboard)
    const [tooltip, showTooltip] = useState(true);
    const [plots,setPlots] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDashboard())
  }, [])
  let myPlot;
  if(loading){
    console.log('its loading bro');
  }
  else{
    // console.log('its loaded bro');
    if(products.length!==0){
      // console.log(products)
      myPlot = products.map(each=>{
        return {col1:each.name,col2:each.performance.purchase_price,
        col3:each.performance.current_price,col4:Math.ceil((each.performance.current_price)-(each.performance.purchase_price))
        }
      })
      // console.log(myPlot)
    }
  }
  const isThereData = ()=>{
    if(myPlot!==undefined){
      return myPlot
    }
    else{
      return []
    }
  }
  const data = React.useMemo(
    () =>isThereData(),[]
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Purchase Price',
        accessor: 'col2',
      },
      {
        Header:'Current Price',
        accessor:'col3'
      },
      {
        Header:'Gain/Loss',
        accessor:'col4'
      }
    ],
    []
  )
  const tableInstance = useTable({ columns, data },useMemo(()=>useSortBy,[]))
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance
// console.log(products)
  return (
    <>
    
    <table {...getTableProps()} className='table table-dark table-striped'>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps(column.getSortByToggleProps())}
               >
                 {column.render('Header')}
                 <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                     {/* {console.log(cell)} */}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     </>
  
  )
}

{/* {products.map(each=>(
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
        ))} */}