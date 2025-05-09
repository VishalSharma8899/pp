import { useState } from 'react'
 
import './App.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import DashBoard from './components/DashBoard'
function App() {
  

  return (
    <>
    <div>
      <Header/>
      <LandingPage/>
      <DashBoard/>
    </div>
    </>
  )
}

export default App