
import './App.css' 
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'

function App() {
 

  return (
    <>
    <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
        <Footer />
    </div> 
    </>
  )
}

export default App
