import React, { useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './searchSlice'
// import Card from '../card/Card'
import './user.css';

export default function SearchView() {
  const [state,setState] = useState({query:'',collection:'decentraland'})
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
         <h2>List of Users</h2>
         {loading&&<p>Loading...</p>}
         <input name='squery' onInput={(e)=> setState({...state,['query']:e.target.value})} type='search' placeholder='search any real estate digital:'/>
         <div>
         <select name='scollection' onChange={(e)=>setState({...state,['collection']:e.target.value})}>
          <option>decentraland</option>
          <option>lofty</option>
          <option>sandbox</option>
         </select>
         </div>
         
         <div>
         {/* {products!==undefined&&products.map(each=>(
            <Card details={each} key={each.id}/>
         ))} */}
         {products!==undefined&&products.map(each=>(
            <p>{each.name}</p>
         ))}
         </div>
         
     </div>
   )
}
