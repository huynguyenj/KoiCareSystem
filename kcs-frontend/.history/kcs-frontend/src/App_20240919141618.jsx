
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
   
      <Header/>
        <Routes>
            <Route path='/' element></Route>
        </Routes>
     
    </BrowserRouter>
    <Footer/>
       
    </>
  )
}

export default App
