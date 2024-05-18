import React from 'react'
import { Button, Modal,Container,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarloginJoin() {
    
  const[theme,setTheme] = useState('black');




  function themeSetting(){
    if(theme === 'white'){
      setTheme('black')
      console.log(theme)
    }
    else if(theme === 'black'){
      setTheme('white')
      console.log(theme)
    }
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

<div className='LoginandDarkmode'>

<Button className='LogIn' onClick={handleShow}>
     Login
   </Button>

 
   <Container>
   <Row>
     <Col xs={12} md={6}> {/* Adjust the width as needed */}
       {/* Your modal content here */}
       <Modal className='w-30' show={show} onHide={handleClose}>
       <div class="form-container">
     <Modal.Header className='modalHeader' style={{fontSize:"1.2vw"}} closeButton>
       <Modal.Title ><p style={{fontSize:"2vw",textAlign:"center"}} class="title">Login</p></Modal.Title>
     
     </Modal.Header>
     <Modal.Body>
    
 {/* <p class="title">Login</p> */}
 <form class="form">
     <div class="input-group">
         <label for="username">Username</label>
         <input type="text" name="username" id="username" placeholder=""/>
     </div>
     <div class="input-group">
         <label for="password">Password</label>
         <input type="password" name="password" id="password" placeholder=""/>
         <div class="forgot">
             <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
         </div>
     </div>
     <button class="sign">Sign in</button>
 </form>
 <div class="social-message">
     <div class="line"></div>
     <p class="message">Login with social accounts</p>
     <div class="line"></div>
 </div>
 <div class="social-icons">
     <button aria-label="Log in with Google" class="icon">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
             <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
         </svg>
     </button>
     <button aria-label="Log in with Twitter" class="icon">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
             <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
         </svg>
     </button>
     <button aria-label="Log in with GitHub" class="icon">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
             <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
         </svg>
     </button>
 </div>
 <p class="signup">Don't have an account?
     <a rel="noopener noreferrer" href="#" class="">Sign up</a>
 </p>

     </Modal.Body>
     </div>
     
   </Modal>
     </Col>
   </Row>
 </Container>
<Link to='/member.js'>
<Button  className="LogIn joinUsBtn">
Join Us
</Button>
</Link>


<label className='labelToggle' id="theme-toggle-button">
<input type="checkbox" id="toggle"  onClick={themeSetting}/>
<svg viewBox="0 0 69.667 44" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(3.5 3.5)" data-name="Component 15 – 1" id="Component_15_1">
   
   
   <g filter="url(#container)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
     <rect fill="#83cbd8" transform="translate(3.5 3.5)" rx="17.5" height="35" width="60.667" data-name="container" id="container"></rect>
   </g>
   
   <g transform="translate(2.333 2.333)" id="button">
     
     <g data-name="sun" id="sun">
       <g filter="url(#sun-outer)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
         <circle fill="#f8e664" transform="translate(5.83 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="sun-outer" id="sun-outer-2"></circle>
       </g>
       <g filter="url(#sun)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
         <path fill="rgba(246,254,247,0.29)" transform="translate(9.33 9.33)" d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z" data-name="sun" id="sun-3"></path>
       </g>
       <circle fill="#fcf4b9" transform="translate(8.167 8.167)" r="7" cy="7" cx="7" id="sun-inner"></circle>
     </g>
     
       
     <g data-name="moon" id="moon">
       <g filter="url(#moon)" transform="matrix(1, 0, 0, 1, -31.5, -5.83)">
         <circle fill="#cce6ee" transform="translate(31.5 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="moon" id="moon-3"></circle>
       </g>
       <g fill="#a6cad0" transform="translate(-24.415 -1.009)" id="patches">
         <circle transform="translate(43.009 4.496)" r="2" cy="2" cx="2"></circle>
         <circle transform="translate(39.366 17.952)" r="2" cy="2" cx="2" data-name="patch"></circle>
         <circle transform="translate(33.016 8.044)" r="1" cy="1" cx="1" data-name="patch"></circle>
         <circle transform="translate(51.081 18.888)" r="1" cy="1" cx="1" data-name="patch"></circle>
         <circle transform="translate(33.016 22.503)" r="1" cy="1" cx="1" data-name="patch"></circle>
         <circle transform="translate(50.081 10.53)" r="1.5" cy="1.5" cx="1.5" data-name="patch"></circle>
       </g>
     </g>
   </g>
   
   
   <g filter="url(#cloud)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
     <path fill="#fff" transform="translate(-3466.47 -160.94)" d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z" data-name="cloud" id="cloud"></path>
   </g>

   
   <g fill="#def8ff" transform="translate(3.585 1.325)" id="stars">
     <path transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)" d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z"></path>
     <path transform="matrix(-0.777, 0.629, -0.629, -0.777, 23.185, 12.358)" d="M1.341.529.836.472.736,0,.505.46,0,.4.4.729l-.231.46L.605.932l.4.326L.9.786Z" data-name="star"></path>
     <path transform="matrix(0.438, 0.899, -0.899, 0.438, 23.177, 29.735)" d="M.015,1.065.475.9l.285.365L.766.772l.46-.164L.745.494.751,0,.481.407,0,.293.285.658Z" data-name="star"></path>
     <path transform="translate(12.677 0.388) rotate(104)" d="M1.161,1.6,1.059,1,1.574.722.962.607.86,0,.613.572,0,.457.446.881.2,1.454l.516-.274Z" data-name="star"></path>
     <path transform="matrix(-0.07, 0.998, -0.998, -0.07, 11.066, 15.457)" d="M.873,1.648l.114-.62L1.579.945,1.03.62,1.144,0,.706.464.157.139.438.7,0,1.167l.592-.083Z" data-name="star"></path>
     <path transform="translate(8.326 28.061) rotate(11)" d="M.593,0,.638.724,0,.982l.7.211.045.724.36-.64.7.211L1.342.935,1.7.294,1.063.552Z" data-name="star"></path>
     <path transform="translate(5.012 5.962) rotate(172)" d="M.816,0,.5.455,0,.311.323.767l-.312.455.516-.215.323.456L.827.911,1.343.7.839.552Z" data-name="star"></path>
     <path transform="translate(2.218 14.616) rotate(169)" d="M1.261,0,.774.571.114.3.487.967,0,1.538.728,1.32l.372.662.047-.749.728-.218L1.215.749Z" data-name="star"></path>
   </g>
 </g>
</svg>
</label>
</div>

  )
}

export default NavbarloginJoin