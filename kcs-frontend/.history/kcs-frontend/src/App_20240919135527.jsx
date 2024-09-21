
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Route></Route>
      <Footer/>
    </BrowserRouter>
       
    </>
  )
}

export default App
