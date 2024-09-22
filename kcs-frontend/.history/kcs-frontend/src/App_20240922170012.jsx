
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
   
      <Navbar
        <Routes>
            <Route path='/' element ={<Home/>}></Route>
            <Route path='/login' element ={<Home/> }></Route>
        </Routes>
    
    <Footer/>
       
    </>
  )
}

export default App
