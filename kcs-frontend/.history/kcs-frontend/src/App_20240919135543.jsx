
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path=''></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
       
    </>
  )
}

export default App
