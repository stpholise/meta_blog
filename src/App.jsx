
import './App.css'
// import { useState } from 'react'
import {Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'

function App() {
 

  return (
    <>
    <div>
    <Routes>
       <Route path='/' exact element={<Home />} />
    </Routes>

    </div> 
    </>
  )
}

export default App
