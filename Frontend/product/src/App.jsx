import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/login';
import SignUp from './Pages/Registration';
import Product from './Pages/product';
function App() {
 

  return (
    <>
  <Router>
    <Routes>
    <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product' element={<Product />} />
    </Routes>
  </Router>
    </>
  )
}

export default App
