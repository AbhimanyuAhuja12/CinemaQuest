import  { useState } from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constants';




const Login = () => {
    const[isSignInForm, setisSignInForm] =useState(true);

    const toggleSignInForm=()=>{
   setisSignInForm(!isSignInForm);
    }




  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img className="" src={BG_URL} alt="Background_Image" />
      </div>

      <form className='absolute p-12  bg-black text-white  w-3/12 my-36 mx-auto right-0 left-0 py-4 rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign Up" :"Sign In"}</h1>
      
        {isSignInForm && 
        <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
        }

        <input type="text" placeholder={isSignInForm ? "Email Address":"Email or phone number"} className='p-4 my-4 w-full bg-gray-700'/>

        {isSignInForm && 
        <input type="text" placeholder='Phone Number' className='p-4 my-4 w-full bg-gray-700'/>
        }

        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>

        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In":"Sign Out"}</button>
        
        <p>
        <span className='py-4'>{isSignInForm ? "Already Registered?":"New to Netflix?"}</span>
        <span className='py-4 cursor-pointer underline px-1'onClick={toggleSignInForm}>{isSignInForm ? "Sign In Now":"Sign Up Now"}</span>
        </p>

      </form>
    </div>
  )
}

export default Login;
