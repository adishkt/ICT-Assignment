import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Home from './components/Home'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/a' element={<Add/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
