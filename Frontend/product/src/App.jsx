import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/login';
import SignUp from './Pages/Registration';
function App() {
 

  return (
    <>
  <Router>
    <Routes>
    <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
  </Router>
    </>
  )
}

export default App
