import React, { useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './searchSlice'
import Card from '../card/Card'
import './user.css';

export default function SearchView() {
  const [state,setState] = useState({query:'',collection:'decentraland',chain:''})
  const {products,loading} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    handler()
  }, [state])
  // console.log(products)
  const handler = ()=>{
    // const {name,value} = event.target
    // setState({...state,[name]:value})
    // const {squery,scollection} = state
    // console.log(state);
    // console.log('handler function');
    dispatch(fetchUsers(state));
  }
  const onChangeOption = (event)=>{
    console.log(event.target.value)
  }
  return(
    <div>
         <h2>List of Plots</h2>
         {loading&&<p>Loading...</p>}
         <input name='squery' onInput={(e)=> setState({...state,['query']:(e.target.value).toLowerCase()})} type='search' placeholder='Search any real estate digital:'/>
         <div className='filters-section'>
          <div>
            <p>Worlds</p>
          <select name='scollection' onChange={(e)=>setState({...state,['collection']:e.target.value})}>
          <option>decentraland</option>
          <option>lofty</option>
          <option>sandbox</option>
         </select>
          </div>
         <div>
          <p>Blockchain</p>
         <select name='schain' onChange={(e)=>setState({...state,['chain']:e.target.value})}>
          <option>algorand</option>
          <option>cardano</option>
         </select>
         </div>
        
         </div>
         
         <div className='cards-container'>
         {products!==undefined&&products.map(each=>(
            <Card details={each} key={each.item_id}/>
         ))}
         {/* {products!==undefined&&products.map(each=>(
            <p>{each.name}</p>
         ))} */}
         </div>
         
     </div>
   )
}
