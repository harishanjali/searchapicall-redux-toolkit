import logo from './logo.svg';
import './App.css';
import SearchView  from './features/user/SearchView';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './features/header/Header';
import DashboardView from './features/dashboard/DashboardView';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/search' element={<SearchView/>}></Route>
        <Route path='/dashboard' element={<DashboardView/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
