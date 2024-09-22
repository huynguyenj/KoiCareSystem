
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
   
      <Navbar></Navbar>  
        <Routes>
            <Route path='/' element ={<Home/>}></Route>
            <Route path='/login' element ={<Login/> }></Route>
        </Routes>
       
    </>
  )
}

export default App
