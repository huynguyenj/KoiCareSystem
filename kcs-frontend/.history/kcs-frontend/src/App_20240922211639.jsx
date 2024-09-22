
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
   
      <Navbar></Navbar>  
        <Routes>
            <Route path='/' element ={<Home/>}></Route>
            <Route path='/login' element ={<Login/> }></Route>
            <Route 
        </Routes>
       
    </>
  )
}

export default App
