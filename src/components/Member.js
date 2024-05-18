import React, { useState } from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap'
import './Member.css'

function Member() {
    
    const[info,setInfo] = useState([{
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        confirmpassword:'',
        contactnumber:'',

        officeno:'',
        street:'',
        area:'',
      city:'',
        state:'',

       image:'',
     

        securityQuestion1: '',
        securityQuestion2: '',
    }])


    //  const handleChange = (e)=>{
    //  let q  = e.target.nextSibling.innerHTML;
    //    let i = e.target.value;
    //      setInfo({
    //           q : i
    //      })


    const handleChange = (e) => {
        let q = e.target.nextSibling.innerHTML;
        const { name , value } = e.target;
       setInfo({
          ...info,
          [q]: value,
        });
      };



     console.log(info)
    

   const securityQues={
       
            question1:'What was the name of your first pet?',
            question2:'What is your mother maiden name?',
            question3:'What was the make and model of your first car?',
            question4:'In what city were you born?',
            question5:'What is the name of your elementary school?',
            question6:'What was the name of your first teacher?',
            question7:'What is the name of your favorite childhood friend?',
            question8:'What is your favorite book?',
            question9:'What was the name of your first employer?',
            question10:'What was the name of the street you grew up on?'
            


        }

        let scrQu = Object.values(securityQues)
    
        let RandInd1 = Math.floor(Math.random()*scrQu.length)
        let RandInd2 = Math.floor(Math.random()*scrQu.length)
        let RandInd3 = Math.floor(Math.random()*scrQu.length)
   

        console.log(scrQu[RandInd1])

    const[screen,setScreen] = useState(0)

    function securityQuest(e){
        e.preventDefault()
       setScreen(1)
    }

    function inforForm(e){
        e.preventDefault()
        setScreen(0)
    }


  return (
<div className='memberMainDiv'>
       
      <Container className='containerMember'>
  
          <Form className='formMember'>


         
          <form class="formJoining file-upload-form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
    {screen===0 ? ( <div>
        <div className='formInputMember'>
        
        <label>
            <input onChange={handleChange} value={info.firstname} required="" placeholder="" type="text" class="input"/>
            <span>name</span>
        </label>

        {/* <label>
            <input  onChange={handleChange}  value={info.lastname}  required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label> */}

            
    <label>
        <input onChange={handleChange}  value={info.email}  required="" placeholder="" type="email" class="input" style={{width:'47.2vw'}}/>
        <span>Email</span>
    </label> 
        
    <div class="flex">
        <label>
            <input  onChange={handleChange}  value={info.password}  required="" placeholder="" type="Password" class="input"/>
            <span>Password</span>
        </label>

        <label>
            <input  onChange={handleChange}  value={info.confirmpassword}  required="" placeholder="" type="Password" class="input"/>
            <span>Confirm Password</span>
        </label>
    </div> 
    <label>
        <input  onChange={handleChange}  value={info.contactnumber}  required="" placeholder="" type="number" class="input"  style={{width:'47.2vw'}}/>
        <span>Contact number</span>
    </label>
    {/* <div class="flex">
        <label>
            <input  onChange={handleChange}  value={info.officeno}  required="" placeholder="" type="text" class="input"/>
            <span>Office No.</span>
        </label>

        <label>
            <input  onChange={handleChange}  value={info.street}  required="" placeholder="" type="text" class="input"/>
            <span>Street</span>
        </label>
        <label>
            <input  onChange={handleChange}  value={info.area}  required="" placeholder="" type="text" class="input"/>
            <span>Area</span>
        </label>
    </div> 
    <div class="flex">
        <label>
            <input  onChange={handleChange}  value={info.city}  required="" placeholder="" type="text" class="input"/>
            <span>City</span>
        </label>
        <label>
            <input  onChange={handleChange}  value={info.pincode}  required="" placeholder="" type="Number" class="input"/>
            <span>Pin Code</span>
        </label>
 */}

        <label>
            <input  onChange={handleChange}  value={info.state}  required="" placeholder="" type="text" class="input"/>
            <span>Address</span>
        </label>
  
    {/* </div>  */}
    <label className='flex'>
    <div class="input-div">
  <input  onChange={handleChange}  value={info.image}  className="inputUplaodImage" name="file" type="file" />
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="iconUplaodImage"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>

</div>
uplaod Image
        </label>
        </div>
        <div style={{display:'none'}}>
        <label style={{width:'100%'}}>
            <input required="" placeholder="" type="text" class="input"/>
            <span>{scrQu[RandInd1]}</span>      
        </label>

        <label style={{width:'100%'}}>
            <input required="" placeholder="" type="text" class="input"/>
            <span>{scrQu[RandInd2]}</span>
        </label>
    
            
    <label style={{width:'100%'}}>
        <input required="" placeholder="" type="email" class="input"/>
        <span>{scrQu[RandInd3]}</span>
    </label> 
        </div>

   
        </div>
         
        ):
 
        <div>
        <div style={{display:'none'}}>
        <div class="flex">
        <label>
            <input onChange={handleChange} value={info.firstname} required="" placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input  onChange={handleChange}  value={info.lastname}  required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input  onChange={handleChange}  value={info.email}  required="" placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label> 
        
    <div class="flex">
        <label>
            <input  onChange={handleChange}  value={info.password}  required="" placeholder="" type="Password" class="input"/>
            <span>Password</span>
        </label>

        <label>
            <input  onChange={handleChange}  value={info.confirmpassword}  required="" placeholder="" type="Password" class="input"/>
            <span>Confirm Password</span>
        </label>
    </div> 
    <label>
        <input  onChange={handleChange}  value={info.contactnumber}  required="" placeholder="" type="number" class="input"/>
        <span>Contact number</span>
    </label>
    <div class="flex">
        <label>
            <input  onChange={handleChange}  value={info.officeno}  required="" placeholder="" type="text" class="input"/>
            <span>Office No.</span>
        </label>

        <label>
            <input  onChange={handleChange}  value={info.street}  required="" placeholder="" type="text" class="input"/>
            <span>Street</span>
        </label>
        <label>
            <input  onChange={handleChange}  value={info.area}  required="" placeholder="" type="text" class="input"/>
            <span>Area</span>
        </label>
    </div> 
    <div class="flex">
        <label>
            <input  onChange={handleChange}  value={info.city}  required="" placeholder="" type="text" class="input"/>
            <span>City</span>
        </label>
        <label>
            <input  onChange={handleChange}  value={info.pincode}  required="" placeholder="" type="Number" class="input"/>
            <span>Pin Code</span>
        </label>


        <label>
            <input  onChange={handleChange}  value={info.state}  required="" placeholder="" type="text" class="input"/>
            <span>State</span>
        </label>
  
    </div> 
    <label className='flex'>
    <div class="input-div">
  <input  onChange={handleChange}  value={info.image}  className="inputUplaodImage" name="file" type="file" />
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="iconUplaodImage"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>

</div>
uplaod Image
        </label>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'4.3vw'}}>
        <label style={{width:'100%'}}>
            <input required="" placeholder="" type="text" class="input"/>
            <span>{scrQu[RandInd1]}</span>      
        </label>

        <label style={{width:'100%'}}>
            <input required="" placeholder="" type="text" class="input"/>
            <span>{scrQu[RandInd2]}</span>
        </label>
    
            
    <label style={{width:'100%'}}>
        <input required="" placeholder="" type="email" class="input"/>
        <span>{scrQu[RandInd3]}</span>
    </label> 
        </div>
        </div>
        }
   
 <div className='flex'>

    <button onClick={inforForm} class="submit">Prev</button>
    {screen===1 ?  <button onClick={securityQuest} class="submit">Submit</button>:    <button onClick={securityQuest} class="submit">Next</button>}

    </div>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>


          </Form>
          <svg
      class="icon"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <path
        d="undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg"
      ></path>
    </svg>

      </Container>
    

      <img src='transparentLogojoinus.png' style={{width:'40vw'}}/>

      </div> 
  )
}

export default Member