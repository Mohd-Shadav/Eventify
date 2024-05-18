import React, { useState } from 'react'

import Member from './Member';
import './Navbar.css'
import NavbarLogo from './NavbarLogo';
import NavbaroptCont from './NavbaroptCont';
import NavbarloginJoin from './NavbarloginJoin';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function NavBar() {


  return (
         <div className='Nav'>
    
   
     <NavbarLogo/>

     <NavbaroptCont/>
  
     <NavbarloginJoin/>
    


</div>
  )
}

export default NavBar