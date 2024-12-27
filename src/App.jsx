
import './App.css' 
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'

function App() {
 

  return (
    <>
    <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/blogs' exact element={<Blogs />} />
          <Route path='/blogs/:id' exact element={<BlogDetail />} /> 
        </Routes>
        <Footer />
    </div> 
    </>
  )
}

export default App
