import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Heroes from './components/Heroes'
import Description from './components/Description'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Member from './components/Member'
import { BrowserRouter, Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>


   <NavBar/>
 
  

    <Routes>
      <Route path='/member.js' element={<Member/>}/>
    <Route path={''} element={
    <>
    <Heroes/>
    <Description/>
    <Reviews/>
    <Footer/> 
    </>}/>

      </Routes>
   
   
     
 
     
    </BrowserRouter>
    </>
  )
}

export default App