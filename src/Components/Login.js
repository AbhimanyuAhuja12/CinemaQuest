import  { useRef, useState } from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constants';
import { checkValidData } from '../utils/validate';




const Login = () => {
    const[isSignInForm, setisSignInForm] =useState(true);

    const[errorMessage,seterrorMessage] =useState(null);

    const toggleSignInForm=()=>{
   setisSignInForm(!isSignInForm);
    }

    const email =useRef(null);
    const password= useRef(null);
    const name=useRef(null);
    const PhoneNo=useRef(null);


    const handleButtonClick= ()=>{
     // Validate the form data
     const message =checkValidData(email.current.value,password.current.value,PhoneNo.current.value,name.current.value);
    //  console.log(message);
    // console.log(email.current.value);
    // console.log(password.current.value);
    seterrorMessage(message);


    //If it is valid than I can proceed with SignIn/SignUp
     
    }




  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img className="" src={BG_URL} alt="Background_Image" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12  bg-black text-white  w-3/12 my-36 mx-auto right-0 left-0 py-4 rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign Up" :"Sign In"}</h1>
         
            {/* Name */}
        {isSignInForm && 
        <input  ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
        }
        
        {/* Email */}
        <input ref={email} type="text" placeholder={isSignInForm ? "Email Address":"Email or phone number"} className='p-4 my-4 w-full bg-gray-700'/>
        
        {/* PhoneNo */}
        {isSignInForm && 
        <input  ref={PhoneNo}type="text" placeholder='Phone Number' className='p-4 my-4 w-full bg-gray-700'/>
        }

        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>

        <p className='text-red-500 font-bold text-m'>{errorMessage}</p>

        <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign Up":"Sign In"}</button>
        
        <p>
        <span className='py-4'>{isSignInForm ? "Already Registered?":"New to Netflix?"}</span>
        <span className='py-4 cursor-pointer underline px-1'onClick={toggleSignInForm}>{isSignInForm ? "Sign In Now":"Sign Up Now"}</span>
        </p>

      </form>
    </div>
  )
}

export default Login;
