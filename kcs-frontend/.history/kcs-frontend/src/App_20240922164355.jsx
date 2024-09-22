
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
   
      
        <Routes>
            <Route path='/' element ={<Home/>}></Route>
            <Route path=''></Route>
        </Routes>
    
    <Footer/>
       
    </>
  )
}

export default App
