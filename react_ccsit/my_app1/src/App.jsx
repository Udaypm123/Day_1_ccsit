import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import { AppBar, TextField, Toolbar, Typography } from '@mui/material'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Api from './components/Api'
import Pokemon from './components/Pokemon'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/s' element={<Statebasics />} />
        <Route path='/c' element={<Counter />} />
        <Route path='/w' element={<Welcome />} />
        <Route path='/ap' element={<Api />} />
        <Route path='/p' element={<Pokemon />} />
        
        



      </Routes>

      
      
      
    </>
  )
}








export default App
