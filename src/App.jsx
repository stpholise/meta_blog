
import './App.css' 
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import CreateBlog from './pages/CreateBlog'
import User from './pages/User'
import Contact from './pages/Contact' 

function App() {


  return (
    <>
    <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/blogs' exact element={<Blogs />} />
          <Route path='/blogs/:id' exact element={<BlogDetail />} /> 
          <Route path='/users/:username' exact element={<User />} /> 
          <Route path='/create_blog' exact element={<CreateBlog />} /> 
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
        <Footer />
    </div> 
    </>
  )
}

export default App
