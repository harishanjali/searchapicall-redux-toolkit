import logo from './logo.svg';
import './App.css';
import SearchView  from './features/user/SearchView';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './features/header/Header';
import DashboardView from './features/dashboard/DashboardView';
import Modal from './features/allModal/Modal';
import Modal1 from './modals/Modal1';
import {useState} from 'react'

function App() {
  const [state,setState] = useState({id:'',isactive:false});
  const showModal = (ids)=>{
    setState({...state,id:ids,isactive:true})
  }
  const closeModal = (ids)=>{
    setState({...state,id:ids,isactive:false})
  }
  const {id,isactive} = state;
  return (
    <Router>
      <Header showModal={showModal}/>
      <Routes>
        <Route path='/search' element={<SearchView/>}></Route>
        <Route path='/dashboard' element={<DashboardView/>}></Route>
      </Routes>
      <Modal id={id} isactive={isactive} closeModal={closeModal}/>
    </Router>
  );
}

export default App;
