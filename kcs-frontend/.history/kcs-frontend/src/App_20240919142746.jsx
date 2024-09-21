
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
   
      <Header/>
        <Routes>
            <Route path='/' element></Route>
        </Routes>
     
    
    <Footer/>
       
    </>
  )
}

export default App
