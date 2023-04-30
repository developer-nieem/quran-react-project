
import { Outlet } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftNav from './components/LeftNav'
import MainContent from './components/MainContent'

function App() {


  return (
    <div className='container'>
      <div className='row'>
     <div className="col-md-3 left-nav">
      <LeftNav></LeftNav>
     </div>
     <div className="col-md-9">
      <Outlet></Outlet>
     </div>
    </div>
    </div>
  )
}

export default App
